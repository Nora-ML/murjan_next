import Styled from "styled-components";

const TableStyle = Styled.table`   
    background-color:  var(--counter_med);
    margin: 0 auto;
    font-size: 12px;
    width: 100%;
            

    thead {
        background-color:  var(--main_color);
        color:var(--counter_light);
       
        border:1px solid grey;  
        position: sticky;
        top:0;
        
        tr{

            th{
                padding: 0.5em 1em;
                text-transform:capitalize;
                letter-spacing:0.1em;
                width:0.5%;
            }
            th:not(:first-child,:last-child){
                padding: 0.5em 1em;
                text-transform:capitalize;
                letter-spacing:0.1em;
                width:10%;
            }

        }

    }
    tbody{
        background-color: var(--counter_light);

        tr{
            overflow:hidden;
            text-align: left;
            max-height:80px;
            height:auto;

            th{
                padding: 0.5em 1em;
            }
        }
        
    }

`;
export { TableStyle };
