/* eslint-disable no-console, react/jsx-filename-extension */
import React from "react";
import { render } from "react-dom";
import FileExplorer from "@particles/file-explorer";

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
  }

  onDocumentSelect = (evt, documentTree) => {
    const documentId = parseInt(evt.target.dataset.id, 10);

    documentTree.forEach(d => {
      if (d.id === documentId) {
        d.active = !d.active;
      } else if (d.children) {
        d.children.forEach(child => {
          if (child.id === documentId) {
            child.active = !child.active;
          }
        });
      }
    });
  };

  onDrawingSelect = (evt, drawings) => {
    const drawingId = parseInt(evt.target.dataset.id, 10);
    const selectedDrawing = drawings.find(drawing => drawing.id === drawingId);
    selectedDrawing.active = !selectedDrawing.active;
  };

  onPhotoSelect = (evt, photos) => {
    const photoId = parseInt(evt.target.dataset.id, 10);
    const selectedPhoto = photos.find(photo => photo.id === photoId);
    selectedPhoto.active = !selectedPhoto.active;
  };

  onChangeActivePane = (activePaneKey, activeTabKey) => {
    console.warn("Changed active pane", activePaneKey, activeTabKey);
  };

  onComplete = files => {
    console.warn("Attaching files", files);
  };

  onDropZoneSelect = files => {
    console.warn("Drop zone select", files);
  };

  render() {
    let dataDrawingSets = [
      { id: 1099, name: "Drawing Set 01" },
      { id: 20008, name: "Drawing Set 02" },
      { id: 99999, name: "Drawing Set 03" }
    ];

    let dataDrawings = [
      {
        id: 96,
        drawing_set_id: 1099,
        name: "drawing 01",
        thumbnail_url: "",
        active: false
      },
      {
        id: 230,
        drawing_set_id: 20008,
        name: "drawing 02",
        thumbnail_url: "",
        active: false
      },
      {
        id: 333,
        drawing_set_id: 20008,
        name: "drawing 03",
        thumbnail_url: "",
        active: false
      },
      {
        id: 1099,
        drawing_set_id: 99999,
        name: "drawing 04",
        thumbnail_url: "",
        active: false
      }
    ];

    let dataPhotoCategories = [
      { id: 100, count: "", name: "Album 01" },
      { id: 509, count: "", name: "Album 02" },
      { id: 923, count: "", name: "Album 03" },
      { id: 1065, count: "", name: "Album 04" },
      { id: 2002, count: "", name: "Album 05" }
    ];

    let dataPhotos = [
      {
        id: 1234,
        name: "Mario.png",
        image_category_id: 100,
        thumbnail_url: "",
        active: false
      },
      {
        id: 1932,
        name: "Luigi.png",
        image_category_id: 100,
        thumbnail_url: "",
        active: false
      },
      {
        id: 2777,
        name: "Peach.png",
        image_category_id: 509,
        thumbnail_url: "",
        active: false
      },
      {
        id: 4551,
        name: "Toad.png",
        image_category_id: 509,
        thumbnail_url: "",
        active: false
      },
      {
        id: 9999,
        name: "Bowser.png",
        image_category_id: 509,
        thumbnail_url: "",
        active: false
      },
      {
        id: 1012920,
        name: "Yoshi.png",
        image_category_id: 509,
        thumbnail_url: "",
        active: false
      },
      {
        id: 9923499,
        name: "UncleAmiibo.png",
        image_category_id: 509,
        thumbnail_url: "",
        active: false
      }
    ];

    let children = [
      {
        id: 10202,
        type: "doc",
        children: null,
        name: "customer transmittal.pdf",
        active: false
      },
      {
        id: 10250,
        type: "doc",
        children: null,
        name: "something else.png",
        active: false
      }
    ];

    let children2 = [
      {
        id: 1023302,
        type: "doc",
        children: null,
        name: "customer transmittal 2.pdf",
        active: false
      },
      {
        id: 1024450,
        type: "doc",
        children: null,
        name: "something else 2.png",
        active: false
      }
    ];

    let documents = [
      {
        id: 1019,
        type: "folder",
        children: children,
        name: "A Folder",
        active: false
      },
      {
        id: 13019,
        type: "folder",
        children: children2,
        name: "Another Folder",
        active: false
      },
      {
        id: 1021,
        type: "folder",
        children: null,
        name: "An Empty Folder",
        active: false
      },
      {
        id: 1022,
        type: "doc",
        children: null,
        name: "Mushroom Kingdom Census",
        active: false
      },
      {
        id: 1430,
        type: "doc",
        children: null,
        name: "List of Hats",
        active: false
      },
      { id: 9430, type: "doc", children: null, name: "Letter", active: false }
    ];

    const i18n = {
      buttonText: "Ûƥℓôáδ ƒïℓèƨ",
      documentsTitle: "Documents",
      drawings: "DRAWINGS",
      drawingsLabel: "Fïℓƭèř áñδ ƨèℓèçƭ",
      photos: "PHOTOS",
      photosLabel: "Fïℓƭèř áñδ ƨèℓèçƭ",
      selectAlbum: "PLEASE SELECT AN ALBUM FROM",
      uploadText: "Ðřáϱ ôř ƨèℓèçƭ ƒïℓè(ƨ) ƭô ℓôáδ"
    };

    const paneData = [dataDrawingSets, dataPhotoCategories];

    return (
      <FileExplorer
        dataDocuments={documents}
        dataDrawings={dataDrawings}
        dataDrawingSets={dataDrawingSets}
        dataPane={paneData}
        dataPhotoCategories={dataPhotoCategories}
        dataPhotos={dataPhotos}
        i18n={i18n}
        onChangeActivePane={this.onChangeActivePane}
        onComplete={this.onComplete}
        onDocumentSelect={this.onDocumentSelect}
        onDrawingSelect={this.onDrawingSelect}
        onDropZoneSelect={this.onDropZoneSelect}
        onPhotoSelect={this.onPhotoSelect}
      />
    );
  }
}
