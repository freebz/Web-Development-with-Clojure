(ns leiningen.new.compojure-template
  (:require [leiningen.new.templates :as tmpl]
            [leiningen.core.main :as main]))

(def render (tmpl/renderer "compojure_template"))

(defn compojure-template
  "FIXME: write documentation"
  [name]
  (let [data {:name name
              :sanitized (tmpl/name-to-path name)}]
    (main/info "Generating fresh 'lein new' compojure-template project.")
    (tmpl/->files data
                  ["src/{{sanitized}}/foo.clj" (render "foo.clj" data)])))
