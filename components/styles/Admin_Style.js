import Styled from "styled-components";

const AdminStyle = Styled.div`
    background-color: var(--counter_light);

    flex-basis:70%;
    flex-grow:1;

    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 9% 7% 78% 5%;
    padding:var(--nav_height) 1%;
    
    
    .admin_display_head_left{
        grid-area:1/1/2/2;

        @media screen and (max-width:768px){
            grid-area:1/2/2/3;
        }
      
    }
    .admin_display_head_right{
        grid-area:1/3/1/4;


      
    }
    .admin_display_controls_left{
        position:relative;
        grid-area:2/1/2/2;    
        
        @media screen and (max-width:768px){
            grid-area:2/2/2/3;
        }
    }
    .admin_display_controls_right{
        grid-area:2/3/2/4;
       
    }
    .admin_display_content{
        grid-area:3/1/3/4;
        overflow:auto;
        background-color: var(--counter_light);
        position:relative;
        
    }
    .admin_display_footer{
        grid-area:4/1/4/4;
      
    }
    

`;

export { AdminStyle };
