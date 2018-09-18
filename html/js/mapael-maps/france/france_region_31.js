/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of Nord-Pas-de-Calais for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function($) {
	$.extend(true, $.fn.mapael, 
		{
			maps :  {
				france_region_31 : {
					width : 122.17262,
					height : 73.767746,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -70.6019;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3371.1074;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-59" : "m 44.82,0.12 c -2.91,0.87 -5.78,2.78 -8.93,2.29 -1.66,-0.34 -3.22,0.76 -4.84,1 -2.26,0.37 -4.27,1.57 -6.49,2.12 -0.21,0.61 0.85,1.07 1.13,1.66 1.64,2.6 2.5,5.63 3.79,8.41 0.46,0.87 0.22,2.16 0.97,2.85 0.89,0.57 1.47,1.88 2.75,1.65 0.35,0.02 0.53,0.47 0.92,0.12 0.66,-0.58 1.37,0.3 2.1,0.27 0.42,0.19 0.86,0.05 1.18,-0.16 0.61,0.24 1.26,0.51 1.67,1.02 -0.84,0.93 -2.44,0.75 -3.03,1.94 0.11,1.13 1.26,1.82 1.97,2.58 -0.51,0.23 -1.29,1.44 -0.36,1.57 0.52,-0.24 1.18,-0.4 1.53,0.22 0.72,0.88 1.86,1.08 2.62,1.92 0.73,0.79 1.88,0.62 2.64,-0.05 0.58,0.53 1.21,1.64 2.12,0.6 0.52,-0.43 1.1,0.11 1.65,0.04 0.41,0.35 0.78,1.17 1.42,0.68 0.72,-0.02 1.33,-0.43 1.81,-0.92 0.51,0.44 1.24,0.35 1.8,0.58 0.2,0.46 0.65,1.61 1.27,1.18 0.27,-0.53 0.26,-1.81 1.18,-1.51 0.73,-0.04 -0.09,-0.77 -0.37,-0.88 -0.55,-0.22 -0.04,-1.03 0.31,-1.25 0.95,0.05 1.99,-0.42 2.79,0.34 0.63,0.53 1.49,1.21 1.57,2.07 -0.79,0.12 -1.59,0.4 -2.15,1.03 -0.46,0.55 -1.29,1.26 -1.07,2.04 0.94,0.13 1.03,1.54 0.61,2.18 -0.73,0.11 -0.44,1.63 0.34,1.42 1.1,0.09 2.14,-0.36 3.17,-0.52 0.35,0.61 -0.77,1.73 0.28,1.99 1.06,0.45 1.95,-0.59 3.04,-0.43 0.87,0.08 1.44,0.94 2.24,1.24 1.01,0.37 0.68,1.47 0.28,2.16 -0.21,0.87 1.05,1.41 1.56,0.64 0.19,-0.31 0.96,-0.72 0.91,-0.07 0.12,0.43 0.87,0.51 0.38,0.97 0.01,0.48 -0.22,1.16 -0.84,0.88 -1.08,0.2 -1.58,1.53 -2.72,1.64 -0.71,0.53 0.14,1.5 0.37,2.09 0.57,1.2 2.14,1.33 2.61,2.57 0.12,0.47 0.94,0.78 0.9,1.23 -0.41,0.31 -1.15,0.23 -1.26,0.91 -0.24,0.57 -0.23,1.58 0.64,1.49 1.21,0.19 2.68,0.29 3.7,0.77 -0,0.49 -0.15,1.25 0.59,1.26 0.64,0.07 1.59,0.83 0.82,1.44 -0.62,0.54 -1.99,-0.02 -2.11,1.14 0.04,0.44 0.62,0.52 0.64,1 0.67,0.49 -0.32,1.14 -0.69,1.5 -0.39,0.15 -1.52,-0.08 -1.05,0.68 0.17,0.56 0.82,0.55 1.13,0.87 -0.38,0.69 -1.73,0.78 -1.65,1.67 0.56,0.62 1.02,2.03 0.01,2.49 -0.6,-0.04 -0.25,0.52 -0.13,0.76 -0.58,0.42 -0.44,1.2 0.15,1.54 0.73,0.24 0.81,1.38 1.72,1.29 0.49,0.15 0.98,0.39 1.46,0.47 0.44,0.63 1.42,-0.05 1.93,-0.29 0.76,-0.61 1.98,-0.64 2.81,-0.24 0.43,0.94 1.75,0.48 2.56,0.54 0.81,-0.06 0.71,-1.57 1.71,-1.1 1.03,-0.01 2,0.26 2.92,0.71 0.95,0.07 2.1,0.6 2.97,0.05 0.34,-0.71 1.11,-0.86 1.67,-1.28 0.27,-0.64 0.99,-0.93 1.62,-0.58 0.92,0.2 1.51,0.95 2.2,1.48 0.57,-0.04 1.11,-0.42 1.67,-0.55 0.26,-0.35 0.15,-0.91 0.71,-1.07 0.72,-0.33 1.56,-0.92 2.3,-0.88 0.75,0.6 1.66,0.91 2.54,1.1 0.46,0.34 1.13,0.09 1.62,0.49 0.6,0.24 1.17,-0.6 1.71,0.03 0.72,0.28 1.68,0.33 1.9,1.25 0.11,1.22 0.99,0.14 1.59,-0.09 0.91,-0.31 1.86,-0.6 2.66,-1.16 0.76,-0.08 0.79,1.16 0.46,1.62 -0.15,0.45 -0.87,1.52 0.06,1.53 0.86,-0.13 1.28,0.99 2.18,0.65 0.82,0.01 1.69,0.16 2.27,0.73 1,0.11 2.33,0 2.97,-0.87 0.39,-0.86 -0.92,-1.47 -0.38,-2.34 0.27,-0.76 0.89,-1.25 1.65,-1.4 0.59,-0.53 1.39,-0.87 1.86,-1.5 0.42,-1.08 -1,-1.7 -1.01,-2.73 -0.07,-0.6 0.21,-1.59 -0.68,-1.71 -0.67,-0.15 -1.52,0.58 -2.06,0.14 -0.4,-1.09 0.77,-1.91 0.79,-2.99 0.34,-0.89 -0.14,-2.11 0.8,-2.71 0.5,-0.85 1.38,-1.28 2,-1.98 0.29,-1.15 -1.24,-1.4 -1.81,-2.04 -0.38,-0.56 -0.96,0.03 -0.72,0.54 0.29,0.53 -0.07,1.08 -0.67,0.96 -1.08,-0.84 -0.77,-2.7 -2.15,-3.3 -1.2,-0.81 -2.45,-1.71 -2.99,-3.1 -1.02,0.12 -2.06,0.69 -3.12,0.76 -1.08,0.3 -2.33,1.18 -3.43,0.65 -1.55,-1.58 -3.95,-1.28 -5.96,-1.14 -1.24,0.15 -1.33,1.59 -1.67,2.48 -0.58,-0.32 -1,0.9 -1.43,0.14 -0.85,-1.12 -1.29,-2.59 -1.5,-3.95 0.75,-1.6 0.44,-3.51 -0.06,-5.14 -0.55,-1.11 -1.54,-1.96 -2.34,-2.88 -0.9,-0.31 -1.93,-0.19 -2.88,-0.31 -0.66,-0.09 -1.65,0.81 -2.08,0.03 -0.21,-0.67 1.03,-1.32 0.17,-1.8 -0.72,-0.76 -1.75,-0.25 -2.24,0.47 -0.8,0.86 -2.14,0.55 -3.13,1.09 -0.65,0.38 -1.28,0.22 -1.8,-0.27 -1.26,-0.7 -2.82,-1.33 -3.35,-2.74 0.02,-1.48 0.56,-3.17 -0.45,-4.46 -0.44,-1.19 -1.12,-2.42 -1.11,-3.69 0.24,-0.41 0.96,-0.72 0.47,-1.29 -0.17,-0.69 -0.16,-1.64 -1.09,-1.77 -1.4,0.08 -1.55,-1.63 -2.15,-2.51 -0.55,-1.08 -1.12,-2.81 -2.67,-2.56 -0.95,0.05 -1.48,1.15 -2.5,0.85 -1.27,-0.1 -2.34,0.65 -3.51,0.96 -0.59,0.39 -1.26,0.55 -1.93,0.57 -0.77,0.5 -0.46,1.66 -1.07,2.32 -0.31,0.44 -0.57,1.15 -1.09,1.32 -0.71,-0.71 -1.76,-0.8 -2.52,-1.46 -0.84,-0.45 -2.01,0.19 -2.64,-0.74 -0.49,-0.45 -0.21,-1.31 -0.9,-1.63 -0.54,-0.57 -0.71,-1.45 -1.48,-1.76 -0.49,-0.49 -1.06,-1.01 -0.98,-1.75 -0.64,-0.73 -1.87,-0.75 -2.77,-0.6 -0.64,0.43 -1.3,0 -1.39,-0.7 -0.15,-0.85 -1.36,-1.32 -0.82,-2.28 0.39,-1.24 -0.13,-2.6 -0.66,-3.7 0.34,-0.84 1.45,-1.36 1.5,-2.28 -0.31,-1.25 -1.07,-2.41 -2.16,-3.09 -1.1,-1.68 -0.61,-3.99 -1.7,-5.68 -0.06,-0.03 -0.16,-0.08 -0.24,-0.05 z m 28.09,54.52 0.01,0.01 -0.01,-0.01 z",
					    "department-62" : "m 22.57,5.46 c -2.76,0.34 -5.55,0.86 -8.14,1.84 -2.24,0.64 -4.54,1.36 -6.55,2.57 -1.6,1.23 -2.74,3.06 -4.52,4 -0.77,0.4 -2.03,0.22 -2.52,1.03 0.16,2.39 1.51,4.79 0.74,7.22 -0.49,1.68 -1.76,3.22 -1.36,5.09 0.29,2.25 0.45,4.51 0.58,6.77 -0.01,0.91 1.17,1.34 1.11,2.17 -0.4,0.43 -1.41,0.07 -1.14,1.02 -0.17,2.67 -0.26,5.38 -0.77,8 -0.14,1.34 1.46,1.76 2.31,2.43 0.84,0.33 1.55,0.98 1.84,1.83 0.52,0.57 1.37,0.57 1.94,0.09 1.08,-0.23 2.06,-0.71 3.01,-1.26 1.84,-0.35 3.64,0.73 5.11,1.74 0.5,0.74 1.38,1.32 2.27,1.39 0.43,-0.34 0.99,-1.73 1.68,-1.01 0.62,0.32 0.5,1.08 -0.1,1.36 -0.59,0.21 -0.79,1.22 0.03,1.18 0.71,-0.1 1.2,0.77 1.89,0.93 0.89,0.43 1.93,0.45 2.67,1.19 0.34,0.21 1.08,0.15 1.15,0.57 -0.93,0.8 -0.03,2.17 0.76,2.71 0.45,0.32 0.93,0.01 1.33,-0.13 0.61,0.02 0.86,0.61 1.24,0.91 0.72,-0.31 1.3,-1.01 2.14,-1.15 0.53,-0.15 1.19,-0.44 1.54,0.04 0.96,0.13 1.71,-1.6 2.58,-0.58 0.38,0.71 1.55,0.35 1.76,-0.24 -0.12,-0.28 -0.87,-0.57 -0.2,-0.75 0.86,-0.44 1.09,0.96 1.55,1.38 0.51,1.15 0.76,-0.23 1.19,-0.63 0.56,-0.08 0.99,-1.02 1.54,-0.38 0.64,0.51 1.77,-0.43 2.02,0.62 0.34,0.79 1.74,0.76 1.7,1.72 -0.93,0.79 -2.16,1.02 -3.27,1.34 -0.5,0.27 -0.48,0.95 -1.05,1.18 -0.63,0.8 -0.94,1.94 -0.94,2.93 0.5,0.3 1.22,0.45 1.57,1.05 0.19,0.63 0.84,0.31 0.89,-0.21 0.41,-0.63 0.46,-1.71 1.14,-2.09 0.8,-0.33 1.63,-0.52 2.52,-0.56 0.22,0.37 0.69,1.81 1.3,1.16 0.15,-0.41 -0.04,-1.48 0.71,-1.13 0.35,0.25 1.22,-0.24 1.18,0.45 -0.31,0.4 -0.91,1.08 -0.12,1.39 0.69,0.38 1.59,-0.05 2.23,0.26 0.16,0.78 0.96,0.74 1.56,0.66 0.65,0.2 1.29,0.41 1.79,0.93 0.75,0.02 -0.05,-0.89 -0.3,-1.1 0.03,-0.37 0.62,-0.73 0.5,-1.23 -0.31,-0.79 0.88,-0.48 1.24,-0.27 0.5,0.61 1.31,0.81 2.07,0.79 0.21,1.05 -0.04,2.02 -0.68,2.85 -0.07,0.52 -0.31,0.91 -0.77,1.18 -0.38,0.8 1.07,0.71 1.35,0.21 0.4,-0.22 0.83,-0.4 1.18,-0.75 0.8,-0.3 1.46,-0.94 2.2,-1.29 0.4,0.5 0.37,1.3 0.88,1.79 0.45,0.35 -0.17,1.13 0.4,1.28 0.59,-0.38 1.66,-0.07 1.81,-0.98 0.44,0.16 0.77,-0.06 1.03,-0.35 0.74,-0.34 1.18,0.77 1.88,0.3 0.95,-0.62 2.12,-0.94 3.18,-0.36 0.37,0.16 1.65,0.62 1.48,-0.21 -0.07,-0.51 0.21,-1.08 0.23,-1.62 0.38,-0.22 1.06,-0.41 0.9,-1.05 0.03,-0.64 -0.81,-1.22 -0.58,-1.8 0.35,-0.53 1.29,-0.64 1.37,-1.32 -0.77,-0.24 -1.8,-1.57 0.04,-1.61 0.8,-0.09 1.3,-1.06 0.63,-1.65 -0.21,-0.3 -0.71,-0.49 -0.35,-0.91 0.11,-0.67 0.63,-1.01 1.29,-0.86 0.66,0.12 1.38,-0.67 0.64,-1.12 -0.49,-0.4 -1.53,-0.36 -1.37,-1.27 -0.28,-0.98 -1.66,-0.61 -2.42,-0.92 -2.06,-0.18 -2.01,0.2 -2.02,-1.67 0.24,-0.57 1.51,-1.13 0.79,-1.79 -0.3,-0.84 -0.93,-1.43 -1.74,-1.78 -1.13,-0.8 -1.73,-2.27 -2.07,-3.5 0.94,0.06 1.94,-0.22 2.35,-1.15 0.35,-0.73 1.77,-0.07 1.74,-1.16 0.07,-0.46 -0.31,-0.73 -0.4,-1.14 -0.71,-0.24 -0.86,1.07 -1.64,0.8 -0.88,-0.13 -1.02,-1.25 -0.57,-1.89 0.71,-0.95 -0.49,-1.47 -1.18,-1.82 -0.64,-0.54 -1.43,-1.2 -2.31,-0.71 -0.71,0.13 -1.32,0.92 -2.05,0.38 -1.46,0.09 0.42,-2.6 -1.2,-1.87 -0.99,0.3 -2.11,0.48 -3.13,0.21 0.01,-0.48 -0.61,-1.44 0.19,-1.57 0.97,-0.45 0.23,-1.85 -0.59,-2 0.07,-0.64 0.51,-1.46 0.97,-1.96 0.7,-0.45 1.27,-1.38 2.22,-1.07 0.5,-0.45 -0.45,-1.09 -0.68,-1.49 -0.89,-0.99 -2.74,-1.3 -3.74,-0.36 -0.26,0.77 1.23,0.82 1.14,1.49 -0.26,0.67 -1.31,-0.4 -1.45,0.57 -0.31,0.3 -0.08,1.06 -0.42,1.24 -0.8,-0.03 -1.11,-0.83 -1.55,-1.33 -0.57,-0.09 -1.12,-0.43 -1.68,-0.41 -0.46,0.66 -1.41,0.67 -2.13,0.9 -0.52,-0.37 -0.97,-1 -1.68,-0.86 -0.5,-0.37 -1.18,0.09 -1.44,0.44 -0.74,0.02 -1.16,-0.69 -1.66,-1.03 -0.68,0.45 -1.64,0.93 -2.32,0.19 -0.68,-0.72 -1.61,-0.98 -2.37,-1.54 -0.52,-0.53 -1.2,-1.29 -1.98,-0.77 -0.52,-0.1 -1.12,-0.81 -0.44,-1.2 1.06,-0.65 -0.37,-1.03 -0.7,-1.63 -0.38,-0.52 -1.2,-1.41 -0.37,-1.93 0.66,-0.79 2.05,-0.65 2.52,-1.63 -0.26,-0.51 -1.26,-0.85 -1.67,-0.42 -1.16,-0.16 -2.46,-0.64 -3.57,-0.19 -0.68,-0.47 -1.64,-0.44 -2.15,-1.19 -0.44,-0.67 -1.53,-0.79 -1.54,-1.72 -0.4,-2.98 -2.11,-5.61 -3.1,-8.4 -0.36,-1.23 -1.31,-2.18 -2.13,-3.14 -0.53,-0.5 -1.26,-0.72 -1.99,-0.66 z"
					}
				}
			}
		}
	);
})(jQuery);