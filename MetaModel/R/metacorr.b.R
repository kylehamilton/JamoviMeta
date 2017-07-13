
# This file is a generated template, your changes will not be overwritten

MetaCorrClass <- R6::R6Class(
    "MetaCorrClass",
    inherit = MetaCorrBase,
    private = list(
        .run = function() {
          ri <- self$options$ri
          ni <- self$options$ni
          #slab <- self$options$studylabels
          method2 <- self$options$methodmetacor
          cormeasure <- self$options$cormeasure
          
          data <- self$data
          data[[ri]] <- jmvcore::toNumeric(data[[ri]])
          data[[ni]] <- jmvcore::toNumeric(data[[ni]])
          
          res <- metafor::rma(ri=ri, ni=ni, method=method2, measure=cormeasure, data=data)
          
          self$results$text$setContent(res)
            # `self$data` contains the data
            # `self$options` contains the options
            # `self$results` contains the results object (to populate)

        })
)
