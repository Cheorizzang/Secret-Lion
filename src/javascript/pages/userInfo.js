// import Header from '../common/header.js';
import { Header, MainContainer } from '../common/index.js';
import { UserInfoMain } from '../components/UserInfoMain/index.js';
import Component from '../core/Component.js';

class UserInfo extends Component {
    render() {
        const fragCon = document.createDocumentFragment();

        const header = new Header();

        const userInfoMain = new UserInfoMain();

        // const userInfoMain = document.createElement('main');
        // userInfoMain.setAttribute('class', 'info_main_container');

        // const userInfoh1 = document.createElement('h1');
        // userInfoh1.setAttribute('class', 'ir');
        // userInfoh1.textContent = '유저 프로필 페이지';
        // userInfoMain.appendChild(userInfoh1);

        // // 유저 프로필 섹션
        // const profileSection = document.createElement('section');
        // profileSection.setAttribute('class', 'info_sect_profile');

        // const profileh2 = document.createElement('h2');
        // profileh2.setAttribute('class', 'ir');
        // profileh2.textContent = '유저 프로필';

        // const profileImg = document.createElement('img');
        // // profileImg.setAttribute(
        // //     'src',
        // //     'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        // // );
        // // profileImg.setAttribute(
        // //     'src',
        // //     this.props.photoURL
        // //         ? this.props.photoURL
        // //         : 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        // // );
        // profileImg.setAttribute('class', 'info_img_profile');
        // profileImg.setAttribute('alt', '유저 프로필 이미지');

        // const nicknameTxt = document.createElement('strong');
        // nicknameTxt.setAttribute('class', 'info_strong_nickname');
        // nicknameTxt.textContent = '목짧은기린';

        // const editAnchor = document.createElement('a');
        // // changeBtn.setAttribute('type', 'button');
        // // changeBtn.setAttribute('onclick', "location.href='/setting'");
        // editAnchor.href = '/setting';
        // editAnchor.setAttribute('class', 'info_a_move');
        // editAnchor.textContent = '프로필 수정';

        // const userInfoIcon = new UserInfoIcon();
        // const [icon, btn] = userInfoIcon.render();
        // console.log(btn);
        // btn.addEventListener('click', () => this.getTestData());

        // // 게시글 목록 섹션
        // const postListSection = document.createElement('section');
        // postListSection.setAttribute('class', 'info_sect_postList');

        // const posth2 = document.createElement('h2');
        // posth2.setAttribute('class', 'ir');
        // posth2.textContent = '게시글 목록';

        // this.getTestData().then((posts) => {
        //     this.post = posts;
        //     const postBoard = new PostBoard({ posts: this.post });
        //     postListSection.appendChild(postBoard.render());
        // });

        // // 유저 프로필 섹션 안
        // profileSection.appendChild(profileh2);
        // profileSection.appendChild(profileImg);
        // profileSection.appendChild(nicknameTxt);
        // profileSection.appendChild(editAnchor);
        // // profileSection.appendChild(userInfoIcon.render());
        // profileSection.appendChild(icon);
        // // 게시글 목록 섹션 안
        // postListSection.appendChild(posth2);
        // // postListSection.appendChild(postBoard.render());

        // // 메인 안
        // userInfoMain.appendChild(profileSection);
        // userInfoMain.appendChild(postListSection);

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(userInfoMain.render());

        return fragCon;
    }
}

export default UserInfo;
