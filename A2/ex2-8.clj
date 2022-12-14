;; Structuring the Code

;; l = [1, 2, 3, 4, 5]
;; for i in l
;;   i = i*i

;; for i in l
;;   if (i mod 2 == 0)

;; print l


(println
 (filter #(= (mod % 2) 0)
         (map #(* % %) (range 1 6))))


(->> (range 1 6)
     (map #(* % %))
     (filter #(= (mod % 2) 0))
     (println))
