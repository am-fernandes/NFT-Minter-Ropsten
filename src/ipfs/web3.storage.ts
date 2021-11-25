import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
require('dotenv').config();


async function main() {
  const args = minimist(process.argv.slice(2))
  const token = process.env.WEB3_TOKEN

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  const storage = new Web3Storage({ token })
  const files = []

  for (const path of args._) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  //@ts-ignore
  const cid = await storage.put(files)

  console.log(`ipfs://${cid}${files[0].name}`)
}

main()