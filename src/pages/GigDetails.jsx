import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { addGigMsg, loadGig } from '../store/actions/gig.actions';
import '../../src/assets/styles/pages/GigDetails.scss';
import PackageModal from '../cmps/PackModal';


export function GigDetails() {
  const { gigId } = useParams();
  const gig = useSelector(storeState => storeState.gigModule.gig);

  useEffect(() => {
    loadGig(gigId);
    console.log(gigId);
    console.log(gig);
  }, [gigId]);
  return (
    <section className="gig-details">
      <div className="gig-details-main">
        {gig ? (
          <div>
            <h6><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M12.773 14.5H3.227a.692.692 0 0 1-.482-.194.652.652 0 0 1-.2-.468V7.884H.5l7.041-6.212a.694.694 0 0 1 .918 0L15.5 7.884h-2.046v5.954a.652.652 0 0 1-.2.468.692.692 0 0 1-.481.194Zm-4.091-1.323h3.409V6.664L8 3.056 3.91 6.664v6.513h3.408v-3.97h1.364v3.97Z"></path></svg>/Graphics & Design/Logo Design</h6>
            <h1>{gig.title}</h1>
            <div className='details-owner'>
              <img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f91b8760b6eae417acc9fc0adf178b80-1709314771112/401bbbdd-fbbf-4ce2-9ab9-fe68217db026.jpg" alt="" />
              <p>{gig.owner.fullname}</p>
              <p>{gig.reviews[0].rate}</p>
            </div>
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/192945874/original/45074ea0dfcd30781722c0cc82cdd54355d2102d/do-minimal-logo-design.jpg" alt="" />
            <p>What people loved about this freelancer</p>
            <div className="details-review"><img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/be0207cba0c4e465f4b8721f97ad08b7-1714534350146/ef6594cd-43ea-4632-8971-eb8d13bb038a.jpg" alt="" /></div>
            <p className="about-title">About this gig</p>
            <div className="about-desc" dangerouslySetInnerHTML={{ __html: gig.aboutDesc }}></div>
            <hr className="divider" />
            <div className="about-file-details" dangerouslySetInnerHTML={{ __html: gig.aboutFiles }}></div>
            <div className="about-get-to-know"><h4>Get to know {gig.owner.fullname}</h4>
            <div className='about-get-to-know-details'><img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/f91b8760b6eae417acc9fc0adf178b80-1709314771112/401bbbdd-fbbf-4ce2-9ab9-fe68217db026.jpg" alt="" />
            <p>{gig.owner.fullname}</p></div></div>
            <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" class="st-current"></path></svg> <p>{ gig.reviews[0].rate}</p>
          </div>
          
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
      <div className="gig-buy-modal">

       <PackageModal/>
      </div>
    </section>
  );
}
