;; The :require Keyword

(ns myotherns
  (:require myns))

(myns/say-hello)



(ns myotherns
  (:require [myns :as m]))

(m/say-hello)



(ns myotherns
  (:require [myns :refer :all]))



(ns myotherns
  (:require [myns :refer [say-hello]]))
