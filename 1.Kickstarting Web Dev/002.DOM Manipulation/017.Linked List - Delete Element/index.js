'use strict';

process.stdin.setEncoding('utf-8');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var remove3rdlastElem = function(head) {
    
    // Write your code here to remove the 3 rd last element from link list
    if (!head || !head.next || !head.next.next)
        printLinkList(head) // If list has < 3 nodes, return as is.

    let temp = head;
    let count = 0;

    // Step 1: Find length of linked list
    while (temp) {
        count++;
        temp = temp.next;
    }

    // If there are less than 3 elements, no need to delete
    if (count < 3) return head;

    // Step 2: Find position of 3rd last node
    let targetPos = count - 3;

    // Special case: If deleting head
    if (targetPos === 0) {
        return head.next;
    }

    // Step 3: Traverse to node before the 3rd last node
    temp = head;
    for (let i = 0; i < targetPos - 1; i++) {
        temp = temp.next;
    }

    // Step 4: Delete the 3rd last node
    if (temp.next) {
        temp.next = temp.next.next;
    }
    
    //Dont change anything below. If changed click on reset.
    printLinkList(head)
};
//Dont change anything below. If changed click on reset.
function printLinkList(head){
    var current = head;
    var linklistString = ''
    while(current.next){
      
        linklistString = linklistString + current.val + '->'
        current = current.next
    }
    linklistString = linklistString + current.val
    console.log(linklistString)
}

//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
     var output = remove3rdlastElem(head);
            
            
            process.exit();
            
        })
        

}
readInput();