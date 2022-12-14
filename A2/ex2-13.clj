;; Dynamic Variables

(declare ^{:dynamic true} *foo*)
(println *foo*)
;; => #<Unbound Unbound: #'bar/*foo*>



(defn with-foo [f]
  (binding [*foo* "foo"]
    (f)))
(with-foo #(println *foo*))
;; => foo
