export const GALLERY_QUERY = `
       galleries {
         data {
           attributes {
             images {
               data {
                 id
                 attributes {
                   formats
                 }
               }
             }
           }
         }
       }
`;
