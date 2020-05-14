<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>About me</title>
				<link rel="stylesheet" type="text/css" href="./resume/resumeColsStyle.css"/>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
			</head>
			<body>
				<div id="content">
					<div class="left-col">
						<xsl:apply-templates select="//contact"/>
						<xsl:apply-templates select="//skills"/>
					</div>
					<div class="right-col">
						<xsl:apply-templates select="//education"/>
						<xsl:apply-templates select="//academic-projects"/>
						<xsl:apply-templates select="//experiences"/>
						<xsl:apply-templates select="//extras"/>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="contact">
		<div id="contact">
		<h1><xsl:value-of select="./name/first"/><br/><xsl:value-of select="./name/last"/></h1>
		<table>
			<tr>
				<td>Mail Address</td>
				<td><xsl:value-of select="./mail" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Phone Number</td>
				<td><xsl:value-of select="./tel" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Birth Date</td>
				<td><xsl:value-of select="./birth/day" ></xsl:value-of> /
					<xsl:value-of select="./birth/month" ></xsl:value-of> /
					<xsl:value-of select="./birth/year" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Nationality</td>
				<td><xsl:value-of select="./nationality" ></xsl:value-of></td>
			</tr>
			<tr>
				<xsl:apply-templates select="./extra"></xsl:apply-templates>
			</tr>
		</table>
		</div>
	</xsl:template>

	<xsl:template match="education">
		<div id="education">
			<button id="education_button" class="collapsible" onclick="expand_or_collapse('education_button', 'education_elements')">
				<h2>Education</h2>
			</button>
			<div id="education_elements">
				<xsl:apply-templates select="./element"></xsl:apply-templates>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="academic-projects">
		<div id="academic-projects">
			<button id="academic_projects_button" class="collapsible" onclick="expand_or_collapse('academic_projects_button', 'academic_projects_elements')">
				<h2>Academic Projects</h2>
			</button>
			<div id="academic_projects_elements">
				<xsl:apply-templates select="./element"></xsl:apply-templates>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="experiences">
		<div id="experiences">
			<button id="experiences_button" class="collapsible" onclick="expand_or_collapse('experiences_button', 'experiences_elements')">
				<h2>Experiences</h2>
			</button>
			<div id="experiences_elements">
				<xsl:apply-templates select="./element"></xsl:apply-templates>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="skills">
		<div id="skills">
			<h2>Skills</h2>
			<div id="skills_elements">
				<xsl:apply-templates select="./skill-category"></xsl:apply-templates>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="extras">
		<div id="extras">
			<button id="extras_button" class="collapsible" onclick="expand_or_collapse('extras_button', 'extras_elements')">
				<h2>Extras</h2>
			</button>
			<div id="extras_elements">
				<xsl:apply-templates select="./element"></xsl:apply-templates>
			</div>
		</div>
	</xsl:template>

	<xsl:template match="element">
		<div class="element">
			<table>
				<td>
					<xsl:apply-templates select="./start-date"></xsl:apply-templates>
					<xsl:apply-templates select="./end-date"></xsl:apply-templates>
				</td>
				<td>
					<xsl:apply-templates select="./title"></xsl:apply-templates><br/>
					<i><xsl:apply-templates select="./location"></xsl:apply-templates></i>
					<ul>
						<xsl:apply-templates select="./comment"></xsl:apply-templates>
					</ul>
				</td>
			</table>
		</div>
	</xsl:template>

	<xsl:template match="title">
		<span class="title">
			<xsl:value-of select="."></xsl:value-of>
		</span>
	</xsl:template>

	<xsl:template match="start-date">
		<xsl:value-of select="."></xsl:value-of> -
	</xsl:template>

	<xsl:template match="comment">
		<li><xsl:value-of select="."></xsl:value-of></li>
	</xsl:template>

	<xsl:template match="skill-category">
		<div class="skill_cat">
			<b><xsl:value-of select="./cat-title"></xsl:value-of></b>
			<ul>
				<xsl:apply-templates select="./skill[position() &lt; 5]"></xsl:apply-templates>
				<xsl:if test="./skill[5]"><li>...</li></xsl:if>
			</ul>
		</div>
	</xsl:template>

	<xsl:template match="skill">
		<li>
			<b><xsl:value-of select="./sk-title"></xsl:value-of></b>
			<xsl:if test="sk-title and comment"> : </xsl:if>
			<xsl:value-of select="./comment"></xsl:value-of>
		</li>
	</xsl:template>

	<xsl:template match="extra">
		<xsl:choose>
			<xsl:when test="title">
				<td><xsl:value-of select="title"></xsl:value-of></td>
				<td><xsl:value-of select="value"></xsl:value-of></td>
			</xsl:when>
			<xsl:otherwise>
				<td colspan="2" style="text-align: center;"><xsl:value-of select="value"></xsl:value-of></td>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>
