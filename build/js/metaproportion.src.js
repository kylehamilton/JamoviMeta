
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"xi","title":"Frequencies of the Event","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"ni","title":"Total Sample Sizes","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"slab","title":"Study Label","suggested":["nominaltext"],"type":"Variable"},{"name":"moderatorcor","title":"Moderator","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"includemods","title":"Include Moderator","type":"Bool","default":false},{"name":"methodmetacor","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"cormeasure","title":"Effect Size Model Measures","type":"List","options":[{"name":"PR","title":"Raw Proportion"},{"name":"PLN","title":"Log Transformed Proportion"},{"name":"PLO","title":"Logit Transformed Proportion"},{"name":"PAS","title":"Arcsine Square Root Transformed Proportion"},{"name":"PFT","title":"Freeman-Tukey Double Arcsine Transformed Proportion"}],"default":"PR"},{"name":"level","type":"Number","title":"Confidence interval level","min":50,"max":99.9,"default":95},{"name":"showModelFit","title":"Display model fit","type":"Bool","default":false},{"name":"addcred","title":"Prediction interval","type":"Bool","default":false},{"name":"addfit","title":"Summary estimate","type":"Bool","default":true},{"name":"showweights","title":"Model fitting weights","type":"Bool","default":false},{"name":"xAxisTitle","title":"x-axis Title","type":"String"},{"name":"forestOrder","title":"Study Order","type":"List","options":[{"name":"obs","title":"Observed Effect Sizes"},{"name":"fit","title":"Fitted Values"},{"name":"prec","title":"Sampling Variances"},{"name":"resid","title":"Residuals"},{"name":"abs.resid","title":"Absolute Residuals"}],"default":"fit"},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"},{"name":"yaxis","title":"Funnel Plot y-axis Options","type":"List","options":[{"name":"sei","title":"Standard Error"},{"name":"vi","title":"Sampling Variance"},{"name":"ni","title":"Sample Size"},{"name":"sqrtni","title":"Square Root Sample Size"},{"name":"lni","title":"Log of the Sample Size"}],"default":"sei"},{"name":"yaxisInv","title":"Funnel Plot y-axis Inverse","type":"Bool","default":false},{"name":"enhanceFunnel","title":"Contour-Enhanced","type":"Bool","default":false}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Proportions",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Correlations",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "xi",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Sample Sizes",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "ni",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Study Label",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "slab",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Moderator",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "moderatorcor",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "includemods"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Model Options",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "methodmetacor",
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							name: "cormeasure",
							useSingleCell: true
						},
						{
							type: DefaultControls.TextBox,
							name: "level",
							format: FormatDef.number,
							inputPattern: "[0-9]+",
							useSingleCell: true,
							suffix: "%"
						},
						{
							type: DefaultControls.CheckBox,
							name: "showModelFit",
							useSingleCell: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Plots",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.Label,
					label: "Forest Plot",
					controls: [
						{
							type: DefaultControls.CheckBox,
							name: "addcred"
						},
						{
							type: DefaultControls.CheckBox,
							name: "addfit"
						},
						{
							type: DefaultControls.CheckBox,
							name: "showweights"
						},
						{
							type: DefaultControls.TextBox,
							label: "X-Axis Title",
							name: "xAxisTitle",
							format: FormatDef.string,
							stretchFactor: 2,
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							name: "forestOrder",
							useSingleCell: true
						}
					]
				},
				{
					type: DefaultControls.Label,
					label: "Funnel Plot",
					controls: [
						{
							type: DefaultControls.LayoutBox,
							margin: "none",
							style: "inline",
							controls: [
								{
									type: DefaultControls.ComboBox,
									name: "yaxis",
									label: "Y-Axis"
								},
								{
									type: DefaultControls.CheckBox,
									name: "yaxisInv",
									label: "Inverse",
									verticalAlignment: "center",
									enable: "(!yaxis:lni)"
								},
								{
									type: DefaultControls.CheckBox,
									name: "enhanceFunnel",
									label: "Contour-Enhanced",
									verticalAlignment: "center"
								}
							]
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Publication Bias",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "fsntype"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
