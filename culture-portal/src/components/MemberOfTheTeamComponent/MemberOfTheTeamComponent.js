import React from 'react';
import './MemberOfTheTeamComponent.css';
import MemberOfTeam from "../../assets/images/Yury_Ananich.jpg";
import linkOfDev from '/';

const MemberOfTheTeamComponent = (props) => {

  return (
    <div className="col-4">
      <h3>Коллектив авторов</h3>
      <div className="cub">
        <div className="cubspinner">
          <div className="size1"><a
            href={linkOfDev}
            target="_blank"> <img src={MemberOfTeam} alt="Yury_Ananich"/></a></div>
          <div className="size2"><a href={linkOfDev}
                                    target="_blank">
            <img src={MemberOfTeam} alt="Yury_Ananich"/></a></div>
          <div className="size3"><a
            href={linkOfDev}
            target="_blank"> <img src={MemberOfTeam} alt="Yury_Ananich" /></a></div>
          <div className="size4"><a href={linkOfDev} target="_blank">
          <img src={MemberOfTeam} alt="Yury_Ananich"/></a>
        </div>
        <div className="size5"><a href={linkOfDev} target="_blank"> <img
                                  src={MemberOfTeam} alt="Yury_Ananich" /></a></div>
        <div className="size6"><a href={linkOfDev}
                                  target="_blank">
          <img src={MemberOfTeam} alt="Yury_Ananich"/></a></div>
      </div>
    </div>
</div>
)
}

export default MemberOfTheTeamComponent;
