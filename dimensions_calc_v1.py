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
occurences = {'employed_people': 400, 'population': 700} #set of occurences of each building type or population in a district

#variables for Diversity
#employment_proportions = [0.1, 0.1, 0.2, 0.2, 0.4] #proportion of the population made up of types of employment buildings (co-working spaces, office buildings, etc.)
#residential_proportions = [0.2, 0.3, 0.4] #proportion of the population made up of types of residential areas (middle class, apartments, low income class, etc.)
proportions_dict = {'employment proportions': [0.1, 0.1, 0.2, 0.2, 0.4], 'residential proportions': [0.2, 0.3, 0.4]} 




#Density = (absolute value of occurences) / (area of district)
density_dict = {} #empty dictionary that stores the density of attributes

for attribute,value in occurences.items(): #for each occurence in the dictionary
	density = float(abs(value)/area_of_district) #calculate density
	#print(key, density)
	density_dict[key] = density #add the (occurence, density) to dictionary
	
print(density_dict)




#Diversity = -[sum of a {proportion of a species i x log(proportion of a species i)} as i goes from 1 to total number of species]
diversity_dict = {} #dictionary that stores the diversity of attributes

diversity_total = 0

for proportions in proportions_dict: #for each item in the dictionary
        for number in proportions_dict[proportions]: #for each value (proportion number) in each item
                diversity_total += number * math.log(number) #calculate the diversity
        diversity_total = -diversity_total
        diversity_dict[proportions] = diversity_total #add (proportions, density) to dictionary
        diversity_total = 0 #reset value

print(diversity_total)







