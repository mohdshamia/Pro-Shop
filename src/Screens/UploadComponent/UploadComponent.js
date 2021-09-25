import axios from "axios";
import API_URL from "../../Api";

function UploadComponent() {
  return (
    <>
      <label
        htmlFor="upload-file"
        style={{
          marginTop: 400,
          width: 120,
          height: 60,
          background: "#FFF",
          cursor: "pointer",
        }}
      >
        upload
      </label>
      <input
        id={"upload-file"}
        style={{ marginTop: 400, display: "none" }}
        type={"file"}
        name={"upload-file"}
        onChange={async (e) => {
          try {
            const file = e.target.files[0];

            if (
              !/png|jpeg/.test(file.type.toLowerCase()) ||
              file.size > 200000
            ) {
              console.log("no", file.type.toLowerCase(), file.size);
              return;
            }

            const config = {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            };

            const formData = new FormData();
            formData.append("image", file);
            console.log({ config, formData });

            const { data } = await axios.post(
              `${API_URL}/upload`,
              formData,
              config
            );

            console.log({ data });
          } catch (e) {
            console.log(e);
          }
        }}
        accept={"image/png, image/jpeg"}
        placeholder={"asdasd"}
      />
    </>
  );
}

export default UploadComponent;
