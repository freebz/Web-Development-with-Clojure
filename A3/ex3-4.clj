;; Retrieving Multiple Documents

(couch/with-db db
  (couch/all-documents))



(couch/with-db db
  (couch/all-documents
   {:include_docs true}
   {:keys ["doc1" "doc2" "doc3"]}))
