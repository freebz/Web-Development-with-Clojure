;; Dynamic Polymorphism

(defprotocol Foo
  "Foo doc string"
  (bar [this b] "bar doc string")
  (baz [this] [this b] "baz doc string"))



(deftype Bar [data]
  Foo
  (bar [this param] (println data param))
  (baz [this] (println (class this)))
  (baz [this param] (println param)))



(let [b (Bar. "some data")]
  (.bar b "param")
  (.baz b)
  (.baz b "baz with param"))

;; some data param
;; Bar
;; baz with param



(extend-protocol Foo
  String
  (bar [this param] (println this param)))
(bar "hello" "world")

;; hello world
