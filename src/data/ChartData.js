const NodeMap = {
    "node1": {
        label: "Contact Info",
        value: 100,
        type: "BASIC",
        adjList: ["node2"]
    },
    "node2": {
        label: "NemID",
        value: 95,
        type: "SERVICE",
        adjList: ["node3", "nodeBranch2"]
    },
    "node3": {
        label: "Personal Address",
        value: 95,
        type: "BASIC",
        adjList: []
    },


    "nodeBranch2": {
        label: "Branch 2",
        value: 55,
        type: "BASIC",
        adjList: ["nodeBranch3"]

    },
    "nodeBranch3": {
        label: "Branch 3",
        value: 25,
        type: "BASIC",
        adjList: []

    },
    // "node4": {
    //     label: "Contact Info",
    //     value: 100,
    //     type: "BASIC",
    //     adjList: ["node2"]
    // },
    // "node5": {
    //     label: "NemID",
    //     value: 95,
    //     type: "SERVICE",
    //     adjList: ["node3", "nodeBranch2"]
    // },
    // "node6": {
    //     label: "Personal Address",
    //     value: 95,
    //     type: "BASIC",
    //     adjList: []
    // },
    //
    //
    // "nodeBranch7":  {
    //     label: "Branch 2",
    //     value: 55,
    //     type: "BASIC",
    //     adjList: ["nodeBranch3"]
    //
    // },
    // "nodeBranch5":  {
    //     label: "Branch 3",
    //     value: 25,
    //     type: "BASIC",
    //     adjList: []
    //
    // },
    // "node12": {
    //     label: "Contact Info",
    //     value: 100,
    //     type: "BASIC",
    //     adjList: ["node2"]
    // },
    // "node22": {
    //     label: "NemID",
    //     value: 95,
    //     type: "SERVICE",
    //     adjList: ["node3", "nodeBranch2"]
    // },
    // "node53": {
    //     label: "Personal Address",
    //     value: 95,
    //     type: "BASIC",
    //     adjList: []
    // },
    //
    //
    // "nodeBranch62":  {
    //     label: "Branch 2",
    //     value: 55,
    //     type: "BASIC",
    //     adjList: ["nodeBranch3"]
    //
    // },
    // "nodeBranch53":  {
    //     label: "Branch 3",
    //     value: 25,
    //     type: "BASIC",
    //     adjList: []
    //
    // },
    // "node54": {
    //     label: "Contact Info",
    //     value: 100,
    //     type: "BASIC",
    //     adjList: ["node2"]
    // },
    // "node45": {
    //     label: "NemID",
    //     value: 95,
    //     type: "SERVICE",
    //     adjList: ["node3", "nodeBranch2"]
    // },
    // "node36": {
    //     label: "Personal Address",
    //     value: 95,
    //     type: "BASIC",
    //     adjList: []
    // },
    //
    //
    // "nodeBranch27":  {
    //     label: "Branch 2",
    //     value: 55,
    //     type: "BASIC",
    //     adjList: ["nodeBranch3"]
    //
    // },
    // "nodeBranch11":  {
    //     label: "Branch 3",
    //     value: 25,
    //     type: "BASIC",
    //     adjList: []
    //
    // }


}

export default NodeMap;