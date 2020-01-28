#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thursday Jan 23, 2020

@author: doorleyr, lisaorii

Note for next steps: Update performance to calculate Density are lengthy and repetitive in this version. 
                     Not sure if data loading method from json is correct.
                     Especially for calculating Diversity, 

"""

from time import sleep
import json
import urllib
import requests
import math
import numpy
import matplotlib


def initialise():
    """
    Steps that only need to be performed once when the model starts running
    """
    print('Initialising')

def perform_updates(output_name):
    """
    Steps that take place every time a change is detected in the 
    city_io grid data
    """

    #update area of district
    with urllib.request.urlopen(cityIO_get_url + '/header/spatial') as url:
    #get the latest grid data
        #calculate area of interactive grid
        #cityIO_spatial_data=json.loads(url.read().decode())
        #area_interactive = cityIO_spatial_data['ncols'] * cityIO_spatial_data['nrows'] * cityIO_spatial_data['cellSize'] ^ 2 
        
        #calculate area of meta grid
        #if meta_grid object == 'meta_grid.geojson':
        area_meta_grid = len(meta_grid['features']) * cityIO_spatial_data['cellSize'] ^ 2

    #get metagrid data from meta_grid
   
    land_use_input = meta_grid['features'][2]['land use'] #get standarised land use
    if land_use_input is 'None' or land_use_input == 'None': # if land use is none then pass
        return None
    else:
        base_lu_to_lu = json.load(open(cityIO_get_url + '/base_lu_to_lu.json')) #change input!!!
        standard_lu = base_lu_to_lu[land_use_input] #get standard lu from base
        land_use_list = {} #e.g. {'Residential': 200, 'Office': 140}

            ### we also have to see how much of each Residential_market_rate and residential_affordable make up part of Residential
            #####これがPROPORTION!!!!!!!
            ##どうつくる？ residential: {residential_market_rate: #, resi_affordable: #}, office: {}...} OR 一つずつ？
        land_use_proportions = {}

        if land_use_input not in land_use_key:
            pass
        else: #identify which standard land use it corresponds to
            if standard_lu = 'Residential_Market_Rate':
                if standard_lu not in land_use_list:
                    land_use_list['Residential']['Residential_Market_Rate'] = 1
                else:
                    land_use_list['Residential']['Residential_Market_Rate'] += 1
            elif standard_lu = 'Residential_Affordable':
                if standard_lu not in land_use_list:
                    land_use_list['Residential']['Residential_Affordable'] = 1
                else:
                    land_use_list['Residential']['Residential_Affordable'] += 1
            elif standard_lu = 'Office_High_Density':
                if standard_lu not in land_use_list:
                    land_use_list['Office']['Office_High_Density'] = 1
                else:
                    land_use_list['Office']['Office_High_Density'] += 1
            elif standard_lu = 'Office_Low_Density':
                if standard_lu not in land_use_list:
                    land_use_list['Office']['Office_Low_Density'] = 1
                else:
                    land_use_list['Office']['Office_Low_Density'] += 1
            elif standard_lu = 'Makerspace':
                if standard_lu not in land_use_list:
                    land_use_list['Office']['Makerspace'] = 1
                else:
                    land_use_list['Office']['Makerspace'] += 1
            elif standard_lu = 'Commercial':
                if standard_lu not in land_use_list:
                    land_use_list['Retail']['Commercial'] = 1
                else:
                    land_use_list['Retail']['Commercial'] += 1
            elif standard_lu = 'Restaurants':
                if standard_lu not in land_use_list:
                    land_use_list['Retail']['Restaurants'] = 1
                else:
                    land_use_list['Retail']['Restaurants'] += 1
            elif standard_lu = 'Open Space':
                if standard_lu not in land_use_list:
                    land_use_list['Parks_Open_Space']['Open Space'] = 1
                else:
                    land_use_list['Parks_Open_Space']['Open Space'] += 1
            elif standard_lu = 'Parking':
                if standard_lu not in land_use_list:
                    land_use_list['Parking']['Parking'] = 1
                else:
                    land_use_list['Parking']['Parking'] += 1
            elif standard_lu = 'School':
                if standard_lu not in land_use_list:
                    land_use_list['Academic_Institutional_Art_NGO']['School'] = 1
                else:
                    land_use_list['Academic_Institutional_Art_NGO']['School'] += 1
            elif standard_lu = 'University':
                if standard_lu not in land_use_list:
                    land_use_list['Academic_Institutional_Art_NGO']['University'] = 1
                else:
                    land_use_list['Academic_Institutional_Art_NGO']['Univesity'] += 1
            elif standard_lu = 'Cultural Attraction':
                if standard_lu not in land_use_list:
                    land_use_list['Academic_Institutional_Art_NGO']['Cultural Attraction'] = 1
                else:
                    land_use_list['Academic_Institutional_Art_NGO']['Cultural Attraction'] += 1
            elif standard_lu = 'Place of Worship':
                if standard_lu not in land_use_list:
                    land_use_list['Academic_Institutional_Art_NGO']['Place of Worship'] = 1
                else:
                    land_use_list['Academic_Institutional_Art_NGO']['Place of Worship'] += 1

    #B1, B2, B4, B5 are Office
    #B3, B6, SD1 - SD5 are Retail
    #P1 is Parking
    #PR is Park_Open_Spaces
    #PC is Academic_Institutional_Art_NGO
    #R1 - R6 are Residential

    #calculate Density
    #Density = (absolute value of occurences) / (area of district)
    density_dict = {} #dictionary that stores the density of attributes

    for input_lu in land_use_list: 
        for standard_lu, num_of_occurences in land_use_list[input_lu].items(): #for each occurence in the dictionary
            density = float(abs(num_of_occurences) / area_meta_grid) #calculate density
            #print(attribute, density)
            density_dict[attribute] = density #add (occurence, density) to dictionary
        
    print(density_dict)

    
    #calculate Diversity
    #Diversity = -[sum of a {proportion of a species i x log(proportion of a species i)} as i goes from 1 to total number of species]
    diversity_dict = {} #dictionary that stores the diversity of attributes
    diversity = 0 #diversity with respect to a land use

    ###this is still not done - will discuss at Skype meeting
    #first calculate proportion of standard land use
    """ for input_lu in land_use_list:
        total_num_ = 0
        for standard_lu, num_of_occurences in land_use_list[input_lu].items():
            total_num += num_of_occurences
            proportion = num_of_occurences """ / total_num #but after we get final total_num


    for input_lu in land_use_list: #e.g. Residential, Office
        for standard_lu, proportion in land_use_list[input_lu].items(): #e.g. Residential_Market_Rate, Office_High_Density        
            #print(specific_land_use, proportion)
            diversity += proportion * math.log(proportion) #calculate the diversity
        diversity = -diversity
        diversity_dict[input_lu] = diversity #add (proportions, density) to dictionary
        diversity = 0 #reset value

    print(diversity_dict)


    
    print('Performing updates')
    output_data={}
    r = requests.post(cityIO_post_url+output_name, data = json.dumps(output_data))
    print(r)




city='Budapest'
output_name='test_module' # the output will appear on cityI/O as .../output_name

configs=json.load(open('./python/configs.json'))
city_configs=configs[city]

table_name=city_configs['table_name']
host='https://cityio.media.mit.edu/'

cityIO_get_url=host+'api/table/'+table_name
cityIO_post_url=host+'api/table/update/'+table_name+'/'

SLEEP_TIME=0.5 # seconds to sleep between checkinh cityI/O

CITYIO_SAMPLE_PATH='./'+city+'/sample_cityio_data.json'
META_GRID_SAMPLE_PATH='./'+city+'/sample_meta_grid.geojson'

# =============================================================================
# Get cityIO data for initialisation
# =============================================================================


try:
    with urllib.request.urlopen(cityIO_get_url+'/header/spatial') as url:
    #get the latest grid data
        cityIO_spatial_data=json.loads(url.read().decode())
except:
    print('Using static cityIO grid file')
    cityIO_data=json.load(open(CITYIO_SAMPLE_PATH))
    cityIO_spatial_data=cityIO_data['header']['spatial']


# Full meta grid geojson      
try:
    with urllib.request.urlopen(cityIO_get_url+'/meta_grid') as url:
    #get the meta_grid from cityI/O
        meta_grid=json.loads(url.read().decode())
except:
    print('Using static meta_grid file for initialisation')
    meta_grid=json.load(open(META_GRID_SAMPLE_PATH))
    
# Interactive cell to meta_grid geojson      
int_to_meta_grid={}
for fi, f in enumerate(meta_grid['features']):
    if f['properties']['interactive']:
        int_to_meta_grid[int(f['properties']['interactive_id'])]=fi


initialise()
    

# =============================================================================
# Interactive Analysis
# =============================================================================

lastId=0
while True:
#check if grid data changed
    try:
        with urllib.request.urlopen(cityIO_get_url+'/meta/hashes/grid') as url:
            hash_id=json.loads(url.read().decode())
    except:
        print('Cant access cityIO')
        hash_id=1
    if hash_id==lastId:
        sleep(SLEEP_TIME)
    else:
        try:
            with urllib.request.urlopen(cityIO_get_url+'/grid') as url:
                cityIO_grid_data=json.loads(url.read().decode())
        except:
            print('Using static cityIO grid file')
            cityIO_data=json.load(open(CITYIO_SAMPLE_PATH))  
            cityIO_grid_data=cityIO_data['grid']
        lastId=hash_id
        perform_updates(output_name)
        sleep(SLEEP_TIME) 
# =============================================================================
# =============================================================================
