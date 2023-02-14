const PanelDisplay = ({panels,add,rem}) => {



    if(panels.length == 0)
    {
         return (
              <RiveComponent className="foo" aria-label="Label" />
             )
    }
    return (
         <>
         <HStack justify='center' spacing={8}>
    {panels.map((item) => <Display addPanel={add} removePanel={(e) => rem(item.id)} key={item.id}/>)}
    </HStack>     
         </>
    
    ) 
         

}

export default PanelDisplay;