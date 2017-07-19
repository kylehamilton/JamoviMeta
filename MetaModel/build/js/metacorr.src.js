
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"rcor","title":"Correlations","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"samplesize","title":"Sample Sizes","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"slab","title":"Study Label","type":"Variable"},{"name":"moderatorcor","title":"Moderator","type":"Variable"},{"name":"includemods","title":"Include Moderator","type":"Bool","default":false},{"name":"methodmetacor","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"cormeasure","title":"Correlation Model Measures","type":"List","options":[{"name":"COR","title":"Raw Correlation Coefficient"},{"name":"UCOR","title":"Raw Correlation Coefficient (Bias Corrected)"},{"name":"ZCOR","title":"Fisher's r-to-z Transformed Correlation Coefficient"}],"default":"ZCOR"},{"name":"level","type":"Number","title":"Confidence interval level %","min":50,"max":99.9,"default":95},{"name":"addcred","title":"Forest plot prediction interval","type":"Bool","default":false},{"name":"addfit","title":"Forest plot summary estimate","type":"Bool","default":true},{"name":"showweights","title":"Forest plot model fitting weights","type":"Bool","default":false},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"},{"name":"yaxis","title":"Funnel Plot y-axis Options","type":"List","options":[{"name":"sei","title":"Standard Error"},{"name":"seinv","title":"Inverse of the Standard Error"},{"name":"vi","title":"Sampling Variance"},{"name":"vinv","title":"Inverse of the Sampling Variance"},{"name":"ni","title":"Sample Size"},{"name":"ninv","title":"Inverse of the Sample Size"},{"name":"sqrtni","title":"Square Root Sample Size"},{"name":"sqrtninv","title":"Inverse of the Square Root Sample Size"},{"name":"lni","title":"Log of the Sample Size"}],"default":"sei"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Correlation Coefficients",
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
							name: "rcor",
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
							name: "samplesize",
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
					margin: "none",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "methodmetacor"
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					margin: "none",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "cormeasure"
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					margin: "none",
					controls: [
						{
							type: DefaultControls.TextBox,
							name: "level",
							format: FormatDef.number,
							inputPattern: "[0-9]+"
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Forest Plot Options",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
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
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Funnel Plot Options",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "yaxis"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
