var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://en.pimg.jp/070/702/980/1/70702980.jpg",
"https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-points-260nw-1550040197.jpg"];
var names = ["Family Book","Satyanandam Meenavalli", "Subba Lakshmi Meenavalli", "Srinivas Meenavalli", "Sowjanya Chilkuri", "Yajvin Meenavalli", "Vagmin Meenavalli"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
