import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "undefined");

export { account, databases, storage };
