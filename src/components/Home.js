import React from 'react'
import  buildingImage from "../pngwing.png"

export const Home = () => {
  return (
    <div className='py-10 relative h-full'>
        <img src={buildingImage} alt="" className='opacity-10 absolute left-0 right-0 w-full bottom-10'/>
        <div className="container px-10 mx-auto">
            <div className="overflow-y-auto">
              <div className="border-b">
                  <h1 className='text-3xl font-bold mb-8'>Home page</h1>
              </div>
              <div className="py-4 space-y-4">
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates voluptatem quos impedit ipsam suscipit eius molestiae molestias laborum a? Vitae dolorum harum inventore assumenda necessitatibus ullam sed id repellat provident distinctio! Numquam magni voluptate quos eius harum non laborum dicta illo molestias, omnis et nulla, in, dolorum nesciunt dolore pariatur optio corrupti repellat natus unde iste fuga dolor ipsum aliquam. Suscipit sed nesciunt doloremque iusto sunt consequuntur architecto consequatur, quae dolorum obcaecati repellendus inventore ab sint veniam soluta dicta quis dolorem dolores rerum atque voluptatum laudantium et? Ducimus quibusdam nobis soluta reiciendis excepturi illum illo natus suscipit officiis reprehenderit.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
