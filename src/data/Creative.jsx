import TN1 from "../assets/Creative/TN1.jpg";
import TN3 from "../assets/Creative/TN3.png";

export const creative = [
  {
    id: "short-film-1",
    title: "Short Film - Odessey 2K25",
    type: "Short Film",
    category: "Lead Actor",
    description: "Worked on a short film project focusing on storytelling and visual narrative. Contributed to the wise cause of Sustainable Development Goals (SDGs) through impactful storytelling.",
    media: {
      type: "video",
      thumbnail: TN1,
      videoUrl: "https://youtu.be/lTBJ-OmDeBk",
      duration: "8:07"
    },
    role: "Cinematographer & Editor",
    year: "2024",
    technologies: ["After Effects", "Premiere Pro", "Cinematography", "Color Grading"],
    highlights: [
      "Collaborated with creative team"
    ]
  },
  {
    id: "short-film-2",
    title: "Short Film - Timeline Zero",
    type: "Short Film",
    category: "VFX & Post-Production",
    description: "Second short film project with focus on visual effects and creative storytelling. Handeled the lead role and helped in cinematography.",
    media: {
      type: "video",
      thumbnail: TN3,
      videoUrl: "https://youtu.be/tg_4ac73V_M?si=IgCaM6sITBFPPDrD",
      duration: "14:23"
    },
    role: "Actor & Cinematographer",
    year: "2024",
    technologies: ["After Effects", "Premiere Pro", "VFX", "Motion Graphics"],
    highlights: []
  },
  {
    id: "photoshop-designs",
    title: "Digital Art & Design Collection",
    type: "Graphic Design",
    category: "Digital Art & Branding",
    description: "Collection of digital artwork and design projects created using Photoshop. Includes poster designs, digital illustrations, and creative compositions.",
    media: {
      type: "gallery",
      images: [TN1, TN3],
      mainImage: TN1
    },
    role: "Digital Artist & Designer",
    year: "2023-2024",
    technologies: ["Photoshop", "Digital Art", "Branding", "Illustration"],
    highlights: [
      "Created digital artwork and illustrations",
      "Poster and branding design projects",
      "Photo manipulation and editing",
      "Creative composition and layout design"
    ]
  },
  {
    id: "after-effects-vfx",
    title: "VFX & Motion Graphics Reel",
    type: "Visual Effects",
    category: "Motion Graphics & Animation",
    description: "Showcase of VFX work and motion graphics created using After Effects. Includes title sequences, visual effects, and animated graphics.",
    media: {
      type: "video",
      thumbnail: TN3,
      videoUrl: "https://youtu.be/-pN4dNxrRB4", // Updated to YouTube link
      duration: "0:08"
    },
    role: "VFX Artist & Motion Graphics Designer",
    year: "2024",
    technologies: ["After Effects", "VFX", "Motion Graphics", "Animation"],
    highlights: [
      "Created motion graphics and animations",
      "Visual effects and compositing",
      "Title sequences and transitions",
      "3D elements and particle effects"
    ]
  }
];

export default creative;
