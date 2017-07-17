
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"n1i","title":"Group One Sample Size","type":"Variable"},{"name":"m1i","title":"Group One Mean","type":"Variable"},{"name":"sd1i","title":"Group One Stand Deviation","type":"Variable"},{"name":"n2i","title":"Group Two Sample Size","type":"Variable"},{"name":"m2i","title":"Group Two Mean","type":"Variable"},{"name":"sd2i","title":"Group Two Stand Deviation","type":"Variable"},{"name":"slab","title":"Study Label","type":"Variable"},{"name":"moderator","title":"Moderator","type":"Variable"},{"name":"includemods","title":"Include Moderator","type":"Bool","default":false},{"name":"methodmetamdms","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"mdmsmeasure","title":"Model Measures","type":"List","options":[{"name":"MD","title":"Raw Mean Difference"},{"name":"SMD","title":"Standardized Mean Difference"},{"name":"SMDH","title":"SMD with Heteroscedastic Population Variances"},{"name":"ROM","title":"Log Transformed Ratio of Means"}],"default":"SMD"},{"name":"level","type":"Number","title":"Confidence Interval Level","min":50,"max":99.9,"default":95},{"name":"addcred","title":"Add Forest Plot Prediction Interval","type":"Bool","default":false},{"name":"addfit","title":"Add Forest Plot Summary Estimate","type":"Bool","default":true},{"name":"showweights","title":"Show Model Fitting Weights in Forest Plot","type":"Bool","default":false},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"},{"name":"yaxis","title":"Funnel Plot y-axis Options","type":"List","options":[{"name":"sei","title":"Standard Error"},{"name":"seinv","title":"Inverse of the Standard Error"},{"name":"vi","title":"Sampling Variance"},{"name":"vinv","title":"Inverse of the Sampling Variance"},{"name":"ni","title":"Sample Size"},{"name":"ninv","title":"Inverse of the Sample Size"},{"name":"sqrtni","title":"Square Root Sample Size"},{"name":"sqrtninv","title":"Inverse of the Square Root Sample Size"},{"name":"lni","title":"Log of the Sample Size"}],"default":"sei"}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Mean Differences (n, M, SD)",
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
					label: "Group One Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "n1i",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group One Mean",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "m1i",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group One Stand Deviation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "sd1i",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "n2i",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Mean",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "m2i",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Group Two Stand Deviation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "sd2i",
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
							name: "moderator",
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
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "methodmetamdms"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "mdmsmeasure"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					name: "level",
					format: FormatDef.number,
					inputPattern: "[0-9]+"
				}
			]
		},
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
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					name: "fsntype"
				}
			]
		},
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
});

module.exports = { view : view, options: options };
