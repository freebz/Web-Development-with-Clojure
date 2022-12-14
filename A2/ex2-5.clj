;; Higher-Order Functions

(map #(* % %) [1 2 3 4 5])
;; => (1 4 9 16 25)

(filter even? [1 2 3 4 5])
;; => (2 4)

(filter even?
        (map #(* 3 %) [1 2 3 4 5]))
;; => (6 12)


(defn concat-fields [& fields]
  (apply str (interpose ", " (remove empty? fields))))

(concat-fields "" "1 Main street" "Toronto" nil "Canada")
;; => "1 Main street, Toronto, Canada"
