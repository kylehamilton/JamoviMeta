
# This file is a generated template, your changes will not be overwritten

MetaModelClass <- R6::R6Class(
    "MetaModelClass",
    inherit = MetaModelBase,
    private = list(
      .run = function() {
        yi <- self$options$yi
        vi <- self$options$vi
        method2 <- self$options$method
        
        res <- metafor::rma(yi=yi, vi=vi, method=method2, data=self$data)
        #print(res)
        self$results$text$setContent(res)
        
        
        
        
        # `self$data` contains the data
        # `self$options` contains the options
        # `self$results` contains the results object (to populate)
        
      })
)