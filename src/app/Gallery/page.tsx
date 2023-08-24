import CloudinaryImage from "./cloudinary_images"
import UploadButton from "./upload_button"
import cloudinary from "cloudinary"


type SearchResult= {
    public_id:string
}

export default async function GalleryPage() {
    const results=  await cloudinary.v2.search
                  .expression('resource_type:image ')
                  .sort_by('created_at','desc')
                  .max_results(30)
                 .execute() as {resources:SearchResult[]}
                 
                 

    return (
        <section>
            <div className="flex justify-between">
                 <h1 className="text-4xl font-bold">
                   Gallery
                 </h1>
                 <div>
                  <UploadButton/>
                  </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
                 {results.resources.map((result) => (
                   <CloudinaryImage key={result.public_id}
                     src={result.public_id}
                     height='300'
                     width='400'
                     alt='a Image'
                    />

           ) )
           }
           </div>
           

        </section>
    )
}