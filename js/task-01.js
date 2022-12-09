
  const elementNumberUl = document.querySelectorAll(".item");
  console.log(`Number of categories: ${elementNumberUl.length}`)
  
  const allElements = document.querySelectorAll('li.item')
   
  allElements.forEach(function(num) {

      const everyName = num.children
      console.log("Category:", everyName[0].textContent)
      const everyNum = num.children
      console.log("Elements:", everyNum[1].children.length)
      
  });
  
  
  
    
    
    
    
    
    