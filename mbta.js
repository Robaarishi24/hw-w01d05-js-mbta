const subway_lines = {
    Red : [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'porter',
    'Davis',
    'Alewife'
    ],
    
    Green : [    
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
    ],
    Orange : [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'
    ]
    }
    
    const stopsBetweenStations = function (startLine, startStation, endLine, endStation)
     {
         let countOfStops = 0;
         const startLine_index = subway_lines[startLine].indexOf(startStation)
         const endLine_index = subway_lines[endLine].indexOf(endStation)
    
    
         if (startLine === endLine)
         {
           
         return countOfStops ;
         }
            
        if (startLine_index < endLine_index)
        {
            countOfStops = endLine_index  -  startLine_index 
        }
        
        else 
        {
            countOfStops = startLine_index - endLine_index 
        
        }
          
        const parkStreet_startLine = subway_lines[startLine].indexOf('Park Street') 
        const parkStreet_endLine = subway_lines[endLine].indexOf('Park Street')
        
        
        if (parkStreet_startLine < startLine_index)
        {
            toParkstationStart = startLine_index - parkStreet_startLine
        }
       
        else 
        {
            toParkstationStart = parkStreet_startLine - startLine_index 
        }
        
        if (parkStreet_endLine < endLine_index)
        {
            toParkstationEnd = endLine_index - parkStreet_endLine
        }
       
        else 
        {
            toParkstationEnd = parkStreet_endtLine - endLine_index 
            countOfStops = toParkstationStart + toParkstationEnd
        }
         
           return countOfStops;
     }
   
    
    
    
    