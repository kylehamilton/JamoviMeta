
PubBiasClass <- R6::R6Class(
    "PubBiasClass",
    inherit = PubBiasBase,
    private = list(
        .run = function() {
          yi <- self$options$yi
          vi <- self$options$vi
          #method2 <- self$options$method
          
          failsafe <- metafor::fsn(yi=yi, vi=vi, data=self$data)
          #print(res)
          self$results$text$setContent(failsafe)
          
          # `self$data` contains the data
          # `self$options` contains the options
          # `self$results` contains the results object (to populate)
          
        })
)