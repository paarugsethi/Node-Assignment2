## Synchronous and Asynchronous Reading of files

All methods in the fs module are asynchronous by default. However, they can work synchronously by appending Sync. This can majorly affect the flow of the application.

While using Sync, the execution of the script is blocked until that operation succeeds whereas, the execution of an async method completes in the background while the execution of the script is carried out further.

This is why Async methods are preferred as it does not block the execution of the script. This is highly beneficial when dealing with large files which might block the execution for a longer time if not carried out asynchronously.