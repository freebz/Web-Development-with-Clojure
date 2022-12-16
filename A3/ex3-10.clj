;; Deleting Records

;;remove ALL documents
(monger.collection/remove "users")

;;remove documents with the specified key
(monger.collection/remove "users" { :language "English" })
