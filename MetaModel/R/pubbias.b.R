
PubBiasClass <- R6::R6Class(
    "PubBiasClass",
    inherit = PubBiasBase,
    private = list(
        .run = function() {
          yi <- self$options$yi
          vi <- self$options$vi
          fsntype <- self$options$fsntype
          
          failsafe <- metafor::fsn(yi=yi, vi=vi, data=self$data, type=fsntype)
          #print(res)
          self$results$text$setContent(failsafe)
          
          #fpacor <- metafor::ranktest(yi=yi, vi=vi, data=self$data)
          #self$results$text$setContent(fpacor)
          #fpareg regtest(res)
          # `self$data` contains the data
          # `self$options` contains the options
          # `self$results` contains the results object (to populate)
          
        })
)