import {ArrowLeft} from 'lucide-react';

import Link from 'next/link';


export default function StudioNavbar(props) {
  return (
    <div>
        <div className="flex items-center bg-black justify-between p-5">
          <Link href="/" className="text-[#f7ab0a] flex items-center">
            <ArrowLeft className="h-6 w6 text-[#f7ab0a] m-2"/>
            Go To Website
          </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}
