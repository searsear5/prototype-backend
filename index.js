//import express from "express";
//import { Request, Response } from "express";
//import { PrismaClient } from "@prisma/client";
//import cors from "cors";
const express = require('express')
const Prisma = require('@prisma/client')
const cors = require('cors')



const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;
const prisma = new Prisma.PrismaClient();

// GET method
app.get("/user", async (req, res) => {
  try {
    const data = await prisma.user.findMany();
    return res.json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

app.get("/information",async(req,res)=>{
  try {
    const data = await prisma.information.findMany()
    return res.json({
      status: "success",
      data: data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

app.get("/education",async(req,res)=>{
  try {
    const data = await prisma.education.findMany()
    return res.json({
      status: "success",
      data: data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

app.get("/experience",async(req,res)=> {
  try {
    const data = await prisma.experience.findMany()
    return res.json({
      status: "success",
      data:data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

app.get("/skill",async(req,res)=> {
  try {
    const data = await prisma.skill.findMany()
    return res.json({
      status: "success",
      data:data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

app.get("/interest",async(req,res)=> {
  try {
    const data = await prisma.interest.findMany()
    return res.json({
      status: "success",
      data:data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

app.get("/guild",async(req,res)=> {
  try {
    const data = await prisma.guild.findMany()
    return res.json({
      status: "success",
      data:data
    })
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
})

//PUT method
app.put("/editUser", async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      nickname,
      position,
      phone,
      nationality,
      startdate,
      coverimage,
      image,
    } = req.body; 

    
    const userID = 1; 

    const updatedUser = await prisma.user.update({
      where: { userID: userID },
      data: {
        username,
        firstname,
        lastname,
        nickname,
        position,
        phone,
        nationality,
        startdate,
        coverimage,
        image,
      },
    });

    return res.json({
      status: "success",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.put("/editinfo", async (req, res) => {
  try {
    const {
      address,
      subdistrict,
      district,
      province,
      postalcode,
      facebook,
      lineID,
      instagram
    } = req.body;

    const infoID = 1; 

    const updatedInfo = await prisma.information.update({
      where: { informationID: infoID },
      data: {
        address,
        subdistrict,
        district,
        province,
        postalcode,
        facebook,
        lineID,
        instagram
      },
    });

    return res.json({
      status: "success",
      data: updatedInfo,
    });
  } catch (error) {
    console.error("Error updating information:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});


//POST method
app.post("/addEducation", async (req, res) => {
  try {
    const {
      year,
      university
    } = req.body; 
    const createEDU = await prisma.education.create({
      data: {
      year,
      university
      },
    });

    return res.json({
      status: "success",
      data: createEDU,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.post("/addExperience", async (req, res) => {
  try {
    const {
      experience
    } = req.body; 
    const createExp = await prisma.experience.create({
      data: {
      experience
      },
    });

    return res.json({
      status: "success",
      data: createExp,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.post("/addSkill", async (req, res) => {
  try {
    const {
      skill,
      skilllevel
    } = req.body; 
    const createSkill = await prisma.skill.create({
      data: {
      skill,
      skilllevel
      },
    });

    return res.json({
      status: "success",
      data: createSkill,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.post("/addinterests", async (req, res) => {
  try {
    const {
      interest
    } = req.body; 
    const createInterest = await prisma.interest.create({
      data: {
      interest
      },
    });

    return res.json({
      status: "success",
      data: createInterest,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});


app.post("/addguild", async (req, res) => {
  try {
    const {
      guild
    } = req.body; 
    const createGuild = await prisma.guild.create({
      data: {
      guild
      },
    });

    return res.json({
      status: "success",
      data: createGuild,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

//DELETE method
app.delete("/exp/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.experience.delete({
      where: { expID: Number(id) },
    });
    return res.json({ status: "success", message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.delete("/interest/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.interest.delete({
      where: { interestID: Number(id) },
    });
    return res.json({ status: "success", message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.delete("/guild/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.guild.delete({
      where: { guildID: Number(id) },
    });
    return res.json({ status: "success", message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`HTTP server running at http://localhost:${port}`);
});

module.exports = app
