
# This file is a generated template, your changes will not be overwritten

MetaDichotClass <- R6::R6Class(
    "MetaDichotClass",
    inherit = MetaDichotBase,
    private = list(
      .run = function() {
        ai <- self$options$ai
        n1i <- self$options$n1i
        ci <- self$options$ci
        n2i <- self$options$n2i
        mods <- self$options$moderator
        slab <- self$options$slab
        includemods <- self$options$includemods
        addcred <- self$options$addcred
        addfit <- self$options$addfit
        showweights <- self$options$showweights
        level <- self$options$level
        fsntype <- self$options$fsntype
        method2 <- self$options$methodmetamdms
        mdmseasure <- self$options$mdmsmeasure
        yaxis <- self$options$yaxis
        
        
        if (self$options$includemods == TRUE) {
          data <- data.frame(ai = self$data[[self$options$ai]], n1i = self$data[[self$options$n1i]], ci = self$data[[self$options$ci]], n2i = self$data[[self$options$n2i]], mods = self$data[[self$options$moderator]], slab = self$data[[self$options$slab]])
          data[[ai]] <- jmvcore::toNumeric(data[[ai]])
          data[[n1i]] <- jmvcore::toNumeric(data[[n1i]])
          data[[ci]] <- jmvcore::toNumeric(data[[ci]])
          data[[n2i]] <- jmvcore::toNumeric(data[[n2i]])
          data[[mods]] <- jmvcore::toNumeric(data[[mods]])
        } else {
          data <- data.frame(ai = self$data[[self$options$ai]], n1i = self$data[[self$options$n1i]], ci = self$data[[self$options$ci]], n2i = self$data[[self$options$n2i]], slab = self$data[[self$options$slab]])
          data[[ai]] <- jmvcore::toNumeric(data[[ai]])
          data[[n1i]] <- jmvcore::toNumeric(data[[n1i]])
          data[[ci]] <- jmvcore::toNumeric(data[[ci]])
          data[[n2i]] <- jmvcore::toNumeric(data[[n2i]])
        }
        
        
        if (self$options$includemods == TRUE) {
          res <- metafor::rma(ai=ai, n1i=n1i, ci=ci, n2i=n2i, mods=mods, method=method2, measure=mdmseasure, data=data, slab=slab, level=level)
        } else {
          res <- metafor::rma(ai=ai, n1i=n1i, ci=ci, n2i=n2i, method=method2, measure=mdmseasure, data=data, slab=slab, level=level)
        }
        
        
        
        failsafePB <- metafor::fsn(yi=res$yi, vi=res$vi, type=fsntype)
        ranktestPB <- metafor::ranktest(res)
        regtestPB <- metafor::regtest(res)
        
        self$results$text$setContent(res)
        self$results$fsn$setContent(failsafePB)
        self$results$rank$setContent(ranktestPB)
        self$results$reg$setContent(regtestPB)
        # `self$data` contains the data
        # `self$options` contains the options
        # `self$results` contains the results object (to populate)
        image <- self$results$plot
        imageFUN <- self$results$funplot
        
        image$setState(res)
        imageFUN$setState(res)
        
      },
      .plot=function(image, ...) {  # <-- the plot function
        plotData <- image$state
        slab <- self$options$slab
        addcred <- self$options$addcred
        addfit <- self$options$addfit
        level <- self$options$level
        showweights <- self$options$showweights
        #plot <- metafor::forest(plotData$yi, plotData$vi, addcred=addcred, addfit=addfit)
        plot <- metafor::forest(plotData, addcred=addcred, addfit=addfit, level=level, showweights=showweights)
        #plot <- metafor::forest(plotData$yi, plotData$vi, addcred=addcred, addfit=addfit, level=level, showweights=showweights)
        print(plot)
        TRUE
        
      },
      .funplot=function(imageFUN, ...) {  # <-- the plot function
        plotDataFUN <- imageFUN$state
        yaxis <- self$options$yaxis
        plotFUN <- metafor::funnel(plotDataFUN, vi=plotDataFUN$vi, yaxis=yaxis)
        print(plotFUN)
        TRUE

      }))