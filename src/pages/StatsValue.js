import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import React from 'react'

//Create here components for visualizinch each stats line and give the input in the Stats component through the attributes..

const StatsValue = ({label,value,color}) =>{


    return (
        <Box w='175px' marginBlockEnd='0.5'>
            <Flex minWidth='max-content'>
                <Text fontSize='lg'>{label}</Text>
                <Spacer/>
                <Tag colorScheme={color} size={'lg'}>{value}</Tag>
            </Flex>
        </Box>
    )

}


export default StatsValue;