import { Badge, Stack } from "@chakra-ui/react";
import React from "react";

const Stats = ({stats}) => {


    return(
        <div>
            <Stack direction='row'>
            <Badge colorScheme='purple'>{stats.id}</Badge>
            <Badge colorScheme='purple'>{stats.height}</Badge>
            <Badge colorScheme='purple'>{stats.order}</Badge>
            <Badge colorScheme='green'>{stats.weight}</Badge>
            </Stack>
        </div>
    )
}

export default Stats;