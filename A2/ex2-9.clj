;; Destructuring Data

(let [[smaller bigger] (split-with #(< % 5) (range 10))]
  (println smaller bigger))

;; => (0 1 2 3 4) (5 6 7 8 9)



(defn print-user [[name address phone]]
  (println name address phone))

(print-user ["Bob" "12 Jarvis street, Toronto" "416-987-3417"])



(defn foo [& args]
  (println args))

(foo "a" "b" "c")
;; => (a b c)



(defn foo [first-arg & [second-arg]]
  (println (if second-arg
             "two arguments were passed in"
             "one argument was passed in")))
(foo "bar")
;; => "one argument was passed in"

(foo "bar" "baz")
;; => "two arguments were passed in"



(let [{foo :foo bar :bar} {:foo "foo" :bar "bar"}]
  (println foo bar))


(let [{[a b c] :items id :id} {:id "foo" :items [1 2 3]}]
  (println id " has the following items " a b c))



(defn login [{:keys [id password]}]
  ...)
(login {:id "bob" :password "secret"})


(defn [{:keys [id pass pass1] :as user}]
  (if (and id (= pass pass1))
    (println "valid user")
    (println user " is not filled in correctly")))
