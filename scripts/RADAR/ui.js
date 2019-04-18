import * as logoPath from "../../images/logo.png";
//
export function info() {
  //
  let logoDiv = document.createElement("div");
  document.body.appendChild(logoDiv);
  logoDiv.id = "logoDiv";
  logoDiv.className = "logoDiv";
  var logo = document.createElement("img");
  logo.src = logoPath.default;
  logoDiv.appendChild(logo);
  logo.width = 80;
  logo.height = 80;
  let text = 0;
}

/*
CityScope Grasbrook
    CSL HCU and MIT CSG will develop, test and deploy a CS platform to be implemented in the bidding and competition phase of the Kleiner Grasbrook site (CSGB) development process  
    This effort will be mutually carried by the different parties and will be constantly evaluated by the HafenCity GmbH partner
    CSGB will feature a developed system composed of several parts:
    An interactive platform for inputting and testing design scenarios through remote, preferably online interface
    A backend system dedicated to performing advance spatial and urban-performance metrics analysis 
    A physical, three-dimensional CS ‘table’ which can augment the above and allow interaction and rapid-prototyping in real-time  
    A community engagement and public participation process aimed at achieving a consensus with local stakeholders in the design process 
    CS development will be carried as an open-sourced development, where all non-sensitive fragments will be openly shared and made accessible in an effort to instill transparency. 
     CSGB Process
    A four step process is proposed for  CSGB development and deployment:
    Insights: the process of gathering relevant urban data, analyzing and displaying insightful products. This phase will be carried out as soon as the project agreement is signed  
    Predictions: The facilitations of computational models and simulations to validate and predict the outcomes of different design scenarios 
    Transformation: The design of an interactive - virtual and tangible rapid-prototyping tool to be facilitated by the design teams and reviewing board. 
    Consensus: A participation process, designed for (step 1) design teams, design reviewers and public officials and (step 2) open to the local community and the general public
    CSGB performance Indicators
    The purpose of the tools is to augment and enhance the design process during the different steps of the competition. The tools are not meant to replace or to pose a technocratic alternative to a design review, but rather to support the processes carried by designers and decision makers. 
    As such, several indicators will be developed for and assessed by the CSGB tools:
    Human dynamics
    The simulation and prediction of individual-level movement patterns for different design scenarios, affected by spatial and functional organization of the design space. 
    Urban Vibrancy and Attractiveness 
    Balancing urban amenities, progamatic density and users’ diversity along with other urban features to asses the vibrancy and ‘pulse’ of the design.   
    Accessibility and Distribution of Urban Functions  
    Assessment of the accessibility ratios of different land-uses and urban functions, given unique users-profiles.   
    Urban Mobility 
    Analyzing and simulating different modes of transportation within and outside of the design space with an emphasis on novel methods for transportation.  

    */
