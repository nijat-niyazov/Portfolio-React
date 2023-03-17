import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef } from 'react';
import { database, signOut, storage } from '../../../utils/firebase';

const Dashboard = () => {
  const formRef = useRef(null);

  // useEffect(() => {
  //   const formData = new FormData(formRef.current);
  //   const values = {};

  //   formData.forEach((value, key) => {
  //     values[key] = value;
  //   });

  //   const { title, description, stacks, url, cover } = values;

  //   console.log(cover);
  // });

  const uploadProject = e => {
    e.preventDefault();
    console.log('sumited');
    const formData = new FormData(formRef.current);
    const values = {};

    formData.forEach((value, key) => {
      values[key] = value;
    });

    const { title, description, stacks, url, cover } = values;
    const storageRef = ref(storage, cover?.name);
    // our created storage ⤴ img.url by its name ⤴

    // uploadBytes(storageRef, cover).then(snapshot => {
    //   // storageRef ⤴ file itself ↖
    //   console.log('Uploaded a blob or file!');
    // });
    uploadBytes(storageRef, cover).then(
      // storageRef ⤴ file itself ↖

      snapshot => {
        console.log(cover);
        console.log(snapshot);
        getDownloadURL(snapshot.ref).then(
          convertedImgToLink => {
            console.log(convertedImgToLink);
            downloadProject({ ...values, cover: convertedImgToLink });
          },
          () => {
            downloadProject({ ...values, cover: null });
          }
        );
      },
      () => {
        downloadProject({ ...values, cover: null });
      }
    );
  };

  const downloadProject = async project => {
    console.log(project);
    try {
      await addDoc(collection(database, 'projects'), project);
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
      alert('Failed add to Projects');
    }
  };

  return (
    <div style={{ marginLeft: '200px', marginTop: '50px' }}>
      <form
        ref={formRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          width: '50%',
        }}
        onSubmit={uploadProject}
      >
        <label htmlFor="title">
          <h1> Project Title </h1>
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Project Title"
          />
        </label>
        <label htmlFor="tester">
          <h1> tester </h1>
          <input
            // name="tester"

            id="tester"
            type="text"
            placeholder="Project Title"
          />
        </label>

        <label htmlFor="description">
          <h1> Description of project </h1>

          <textarea
            name="description"
            id="description"
            placeholder="Description of project"
            rows="10"
          />
        </label>

        <label htmlFor="stacks">
          <h1> Used Stacks </h1>

          <input
            name="stacks"
            id="stacks"
            type="text"
            placeholder="Used Stacks"
          />
        </label>
        <label htmlFor="url">
          <h1> Project URL </h1>

          <input name="url" id="url" type="text" placeholder="Project URL" />
        </label>

        <label htmlFor="img">
          <h1> Cover Photo </h1>

          <input name="cover" id="img" type="file" placeholder="Your Image" />
        </label>
        <button
          style={{ marginRight: '100px', marginTop: '50px' }}
          type="submit"
        >
          Upload
        </button>
      </form>

      <button onClick={signOut}>SignOut</button>
    </div>
  );
};

export default Dashboard;
