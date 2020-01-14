"""
author: lisaorii
date: Tues Jan 14 2020
version: 1

This script conducts the calculations for Density and Diversity as explained in 6.2 of the White Paper.
Input values are hard coded.
"""

import math

#variables for Density
area_of_district = 60 #unit is square miles
occurences = {'employed_people': 400, 'population': 1000} #set of occurences of each building type or population in a district

#variables for Diversity
proportions_of_species = [0.1, 0.1, 0.2, 0.2, 0.4] #proportion of the population made up of species i of total_species




#Density = (absolute value of occurences) / (area of district)
density_dict = {} #empty dictionary that stores the occurence as the key and the density as the value

for key,value in occurences.items(): #for each occurence 
        #calculate density
	density = float(abs(value)/area_of_district)
	#print(key, density)
	density_dict[key] = density #add the (occurence, density) to a dictionary
	
print(density_dict)




#Diversity = -[sum of a {proportion of a species i x log(proportion of a species i)} as i goes from 1 to S]
diversity_total = 0

for proportion in proportions_of_species:
        diversity_total += proportion * math.log(proportion)
        
diversity_total = -diversity_total

#calculate total diversity index by summing the diversity index of each species
print(diversity_total)







