# FS (File System) Node.js Module
it direct connect with client Os rather than Browser

## Major tasks of the fs module

- Reading and writing files
  - readFile()
  - appendFile()
- File metadata and information
  - stat()
  - lstat()
  - fstat()
- Watching for changes
  - watch()
  - watchFile()
- Streaming large files
  - createReadStream()
  - createWriteStream()
- File operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - symlink()

## CRUD Operation

Create/Insert, Read/Retrieve, Update, Delete

- Each item(id,name,price,qty)
  - Add to cart
  - Show cart
  - Remove from cart
  - Update Quantity from cart
  -checkout
NOTE: all items will be stored in hold,so after termination of program we can
retrive cart details
## Reqiured file
crud.js-it contains all the methods and entry point
product.json it contain the product details in array form