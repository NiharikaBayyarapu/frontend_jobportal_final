// src/components/Reviews.jsx
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Shiwangi Singla",
    status: "PLACED",
    rating: 4.5,
    review:
      "Thanks JobPortal for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the this app.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "Jenil Ghevariya",
    status: "PLACED",
    rating: 4.5,
    review:
      "This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on JobPortal because there are a lot of job options here for everyone.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "Kaynat Mansuri",
    status: "PLACED",
    rating: 4.5,
    review:
      "It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    name: "Rekha",
    status: "PLACED",
    rating: 4.5,
    review:
      "Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you!",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces",
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <style>{`
        .reviews-section {
          padding: 40px;
          background: #f9fafb;
          text-align: center;
        }
        .reviews-section h2 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .review-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          text-align: left;
          transition: transform 0.2s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .review-header h3 {
          font-size: 18px;
          font-weight: 600;
          margin-left: 10px;
        }
        .profile {
          display: flex;
          align-items: center;
        }
        .profile img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #eee;
        }
        .status {
          background: #4c1d95; /* Tailwind purple-900 */
          color: #fff;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: bold;
        }
        .rating {
          display: flex;
          align-items: center;
          margin-top: 6px;
        }
        .rating span {
          margin-left: 6px;
          font-weight: 500;
        }
        .review-text {
          margin-top: 12px;
          color: #555;
          line-height: 1.4;
        }
      `}</style>

      <h2>User Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((r, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="profile">
                <img src={r.image} alt={r.name} />
                <h3>{r.name}</h3>
              </div>
              <span className="status">{r.status}</span>
            </div>
            <div className="rating">
              <Star size={18} color="gold" fill="gold" />
              <span>{r.rating}</span>
            </div>
            <p className="review-text">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
