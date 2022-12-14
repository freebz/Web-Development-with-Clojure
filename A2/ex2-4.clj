;; Named Functions

(def double (fn ([x](* 2 x))))

(defn square [x]
  (* x x))

(defn bar [a b]
  (println a)
  (println b)
  (* 2 (+ a b)))


(declare down)

(defn up [n]
  (if (< n 10)
    (down (+ 2 n))
    n))

(defn down [n]
  (up (dec n)))
