import axios from "axios";

const searchImages = async () => {

   const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers: {
        Authorization: "Client-ID _IlWndXkQYKHCwI0CGlfdifQ6eV-47Q94qqPgd0XS_s"
    },
    params: {
        query: term,
    }
    });



    return response.data.response;
};

export default searchImages;