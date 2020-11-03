<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>About me</title>
				<link rel="stylesheet" type="text/css" href="./resumeStyle.css" id="cvstyle"/>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
			</head>
			<body>
				<div id="content">
					<xsl:apply-templates select="//contact"/>

					<xsl:apply-templates select="//education"/>

					<xsl:apply-templates select="//academic-projects"/>

					<xsl:apply-templates select="//experiences"/>

					<xsl:apply-templates select="//skills"/>

					<xsl:apply-templates select="//extras"/>
				</div>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="contact">
		<div id="contact" class="cat">
		<h1><xsl:value-of select="./name/first"/>&#160;<xsl:value-of select="./name/last"/></h1>
		<table>
			<tr>
				<td>
					<span class="en">Mail Address</span>
					<span class="fr">Email</span>
				</td>
				<td><xsl:value-of select="./mail" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>
					<span class="en">Phone Number</span>
					<span class="fr">Tel</span>
				</td>
				<td><xsl:value-of select="./tel" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>
					<span class="en">Date of Birth</span>
					<span class="fr">Naissance</span>
				</td>
				<td><xsl:value-of select="./birth/day" ></xsl:value-of> /
					<xsl:value-of select="./birth/month" ></xsl:value-of> /
					<xsl:value-of select="./birth/year" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>
					<span class="en">Nationality</span>
					<span class="fr">Nationalité</span>
				</td>
				<td><xsl:apply-templates select="./nationality" ></xsl:apply-templates></td>
			</tr>
			<tr>
				<xsl:apply-templates select="./extra"></xsl:apply-templates>
			</tr>
		</table>
		</div>
	</xsl:template>

	<xsl:template match="education">
		<div id="education" class="cat">
			<h2>
				<span class="en">Education</span>
				<span class="fr">Formation</span>
			</h2>
			<xsl:apply-templates select="./element">
			</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="academic-projects">
		<div id="academic-projects" class="cat">
			<h2>
				<span class="en">Academic Projects</span>
				<span class="fr">Projets académiques</span>
			</h2>
			<xsl:apply-templates select="./element">
			</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="experiences">
		<div id="experiences" class="cat">
			<h2>
				<span class="en">Experiences</span>
				<span class="fr">Experiences professionnelles</span>
			</h2>
			<xsl:apply-templates select="./element">
			</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="skills" class="cat">
		<div id="skills" class="cat">
			<h2>
				<span class="en">Skills</span>
				<span class="fr">Compétences</span>
			</h2>
			<table>
				<xsl:apply-templates select="./skill-category"></xsl:apply-templates>
			</table>
		</div>
	</xsl:template>

	<xsl:template match="extras">
		<div id="extras" class="cat">
			<h2>Extras</h2>
			<xsl:apply-templates select="./element">
			</xsl:apply-templates>
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
					<ul><xsl:apply-templates select="./comment"></xsl:apply-templates></ul>
				</td>
			</table>
		</div>
	</xsl:template>

	<xsl:template match="title">
		<span class="title">
			<xsl:choose>
				<xsl:when test="fr">
					<span class="en"><xsl:value-of select="./en"></xsl:value-of></span>
					<span class="fr"><xsl:value-of select="./fr"></xsl:value-of></span>
				</xsl:when>
				<xsl:otherwise>
					<span class="en fr"><xsl:value-of select="./en"></xsl:value-of></span>				
				</xsl:otherwise>
			</xsl:choose>
		</span>
	</xsl:template>

	<xsl:template match="start-date">
		<xsl:if test="./day">
			<xsl:value-of select="./day"></xsl:value-of>/
		</xsl:if>
		<xsl:if test="./month">
			<xsl:value-of select="./month"></xsl:value-of>/
		</xsl:if>
		<xsl:value-of select="./year"></xsl:value-of> -
	</xsl:template>
	
	<xsl:template match="end-date">
		<xsl:if test="./day">
			<xsl:value-of select="./day"></xsl:value-of>/
		</xsl:if>
		<xsl:if test="./month">
			<xsl:value-of select="./month"></xsl:value-of>/
		</xsl:if>
		<xsl:value-of select="./year"></xsl:value-of>
	</xsl:template>

	<xsl:template match="element/comment">
		<li>
			<xsl:choose>
				<xsl:when test="fr">
					<span class="en"><xsl:value-of select="./en"></xsl:value-of></span>
					<span class="fr"><xsl:value-of select="./fr"></xsl:value-of></span>
				</xsl:when>
				<xsl:otherwise>
					<span class="en fr"><xsl:value-of select="./en"></xsl:value-of></span>				
				</xsl:otherwise>
			</xsl:choose>
		</li>
	</xsl:template>

	<xsl:template match="skill/comment">
		<xsl:choose>
			<xsl:when test="fr">
				<span class="en"><xsl:value-of select="./en"></xsl:value-of></span>
				<span class="fr"><xsl:value-of select="./fr"></xsl:value-of></span>
			</xsl:when>
			<xsl:otherwise>
				<span class="en fr"><xsl:value-of select="./en"></xsl:value-of></span>				
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="skill-category">
		<tr>
			<td><b><xsl:apply-templates select="./cat-title"></xsl:apply-templates></b></td>
			<td>
				<ul>
					<xsl:apply-templates select="./skill[position() &lt; 5]"></xsl:apply-templates>
					<xsl:if test="./skill[5]"><li>...</li></xsl:if>
				</ul>
			</td>
		</tr>
	</xsl:template>

	<xsl:template match="skill">
		<li>
			<u><xsl:apply-templates select="./sk-title"></xsl:apply-templates></u>
			<xsl:if test="sk-title and comment"> : </xsl:if>
			<xsl:apply-templates select="./comment"></xsl:apply-templates>
		</li>
	</xsl:template>

	<xsl:template match="extra">
		<xsl:choose>
			<xsl:when test="title">
				<td><xsl:apply-templates select="title"></xsl:apply-templates></td>
				<td><xsl:apply-templates select="value"></xsl:apply-templates></td>
			</xsl:when>
			<xsl:otherwise>
				<td colspan="2" style="text-align: center;"><xsl:apply-templates select="value"></xsl:apply-templates></td>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="value | location | cat-title | sk-title | nationality">
		<xsl:choose>
			<xsl:when test="fr">
				<span class="en"><xsl:value-of select="./en"></xsl:value-of></span>
				<span class="fr"><xsl:value-of select="./fr"></xsl:value-of></span>
			</xsl:when>
			<xsl:otherwise>
				<span class="en fr"><xsl:value-of select="./en"></xsl:value-of></span>				
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>
